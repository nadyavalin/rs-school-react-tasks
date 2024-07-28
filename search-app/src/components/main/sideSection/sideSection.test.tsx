import { render, screen } from "@testing-library/react";
import { SideSection } from "./sideSection";
import * as api from "../../../api/api";
import * as reactRouterDom from "react-router-dom";

vi.mock("react-router-dom", () => ({
  useParams: vi.fn(),
  useSearchParams: vi.fn(),
}));

const sideSectionItemMock = vi.fn();

vi.mock("./sideSectionItem", () => ({
  SideSectionItem: vi.fn((props) => {
    sideSectionItemMock(props);
    return <div />;
  }),
}));

describe("SideSection", () => {
  const mockPerson = {
    name: "John",
    age: 30,
  };

  const useGetPeopleQuery = vi.fn();
  vi.spyOn(api, "useGetPeopleQuery").mockImplementation(useGetPeopleQuery);

  const useSearchParamsMock = vi.fn();
  vi.spyOn(reactRouterDom, "useSearchParams").mockImplementation(useSearchParamsMock);

  const useParamsMock = vi.fn();
  vi.spyOn(reactRouterDom, "useParams").mockImplementation(useParamsMock);

  beforeEach(() => {
    useSearchParamsMock.mockReturnValue([new URLSearchParams()]);
    useParamsMock.mockReturnValue({});
    useGetPeopleQuery.mockReturnValue({ data: { results: [mockPerson] }, isLoading: false });
  });

  afterEach(() => {
    useSearchParamsMock.mockClear();
    useParamsMock.mockClear();
    useGetPeopleQuery.mockClear();
  });

  test("renders loader while loading", () => {
    useGetPeopleQuery.mockReturnValue({ data: null, isLoading: true });

    render(<SideSection />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("renders correct props when key is present", () => {
    useParamsMock.mockReturnValue({ key: "John" });

    render(<SideSection />);

    expect(sideSectionItemMock).toHaveBeenCalledWith({ personDetails: mockPerson });
  });

  test("renders default props when key is absent", () => {
    render(<SideSection />);

    expect(sideSectionItemMock).toHaveBeenCalledWith({ personDetails: mockPerson });
  });
});
