import { render, screen, fireEvent } from "@testing-library/react";
import { SearchForm } from "./searchForm";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

vi.mock("../../../utils/utils", () => ({
  getItemFromLocalStorage: vi.fn(() => "initialSearchTerm"),
}));

describe("SearchForm", () => {
  beforeEach(() => {
    vi.mock("react-router-dom", () => ({
      useNavigate: vi.fn(),
    }));
  });

  test("renders search form with initial value from localStorage", () => {
    render(<SearchForm />);

    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    expect(searchInput.value).toBe("initialSearchTerm");
  });

  test("updates search term on input change", () => {
    render(<SearchForm />);

    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test search" } });

    expect(searchInput.value).toBe("test search");
  });
});
