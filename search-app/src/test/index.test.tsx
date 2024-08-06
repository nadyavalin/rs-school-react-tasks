import { render } from "@testing-library/react";
import { MainContent } from "../components/main/mainContent";
import Home, { getServerSideProps } from "../pages/index";
import { PeopleResponse } from "../types/types";
import { GetServerSidePropsContext } from "next";

vi.mock("../components/main/mainContent", () => {
  return {
    MainContent: vi.fn(({ children }) => <div>{children}</div>),
  };
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Home Component", () => {
  test("renders Home component correctly", () => {
    const { container } = render(<Home />);
    expect(container).toBeEmptyDOMElement();
  });

  test("getLayout returns MainContent with page content", () => {
    const pageContent = <div>Test Page</div>;
    const layout = Home.getLayout(pageContent);

    expect(layout.type).toBe(MainContent);
    expect(layout.props.children).toBe(pageContent);
  });

  test("renders Home component with correct data", () => {
    const peopleData = { results: [{ name: "Luke Skywalker" }] };

    const layout = Home.getLayout(<div>{JSON.stringify(peopleData)}</div>);

    expect(layout).toBeDefined();
    expect(layout.props.children.props.children).toBe(JSON.stringify(peopleData));
  });

  test("renders empty when no people data is available", () => {
    const emptyData = { results: [] };
    const layout = Home.getLayout(<div>{JSON.stringify(emptyData)}</div>);

    expect(layout).toBeDefined();
    expect(layout.props.children.props.children).toBe(JSON.stringify(emptyData));
  });
});
describe("getServerSideProps", () => {
  test("returns peopleData when fetch is successful", async () => {
    const mockData: PeopleResponse = {
      count: 1,
      next: "https://swapi.dev/api/people/?page=2",
      previous: null,
      results: [
        {
          name: "Luke Skywalker",
          birth_year: "19BBY",
          eye_color: "blue",
          gender: "male",
          hair_color: "blond",
          height: "172",
          mass: "77",
          skin_color: "fair",
          created: "2014-12-09T13:50:51.644000Z",
          edited: "2014-12-20T21:17:56.891000Z",
        },
      ],
    };

    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockData),
    });

    const result = await getServerSideProps({} as GetServerSidePropsContext);

    expect(result).toEqual({
      props: {
        peopleData: mockData,
      },
    });
  });
});
