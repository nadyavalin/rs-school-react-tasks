import * as navigation from "next/navigation";
import { render, screen } from "@testing-library/react";
import { SideSection } from "./sideSection";
import * as api from "../../../api/api";

vi.mock("next/navigation", () => ({
  useSearchParams: vi.fn(),
}));

const useSearchParamsMock = vi.fn();
vi.spyOn(navigation, "useSearchParams").mockImplementation(useSearchParamsMock);

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

  const useGetPeopleQueryMock = vi.fn();
  vi.spyOn(api, "useGetPeopleQuery").mockImplementation(useGetPeopleQueryMock);

  beforeEach(() => {
    useSearchParamsMock.mockReturnValue({
      get: (param: string) => {
        if (param === "search") return "John";
        if (param === "page") return "1";
        return null;
      },
    });

    useGetPeopleQueryMock.mockReturnValue({ data: { results: [mockPerson] }, isLoading: false });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("renders loader while loading", () => {
    useGetPeopleQueryMock.mockReturnValue({ data: null, isLoading: true });

    render(<SideSection slug="John" />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("renders correct props when person is found", () => {
    render(<SideSection slug="John" />);

    expect(sideSectionItemMock).toHaveBeenCalledWith({ personDetails: mockPerson });
  });

  test("renders default props when person is not found", () => {
    const notFoundPerson = { ...mockPerson, name: "Doe" };

    useGetPeopleQueryMock.mockReturnValue({
      data: { results: [notFoundPerson] },
      isLoading: false,
    });

    render(<SideSection slug="John" />);

    expect(sideSectionItemMock).toHaveBeenCalledWith({ personDetails: undefined });
  });
});
