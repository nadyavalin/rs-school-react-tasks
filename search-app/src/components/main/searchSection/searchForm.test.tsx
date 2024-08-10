import { render, screen, fireEvent } from "@testing-library/react";
import { SearchForm } from "./searchForm";
import { vi } from "vitest";
import { useRouter as useRouterOriginal } from "next/navigation";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

const useRouterMock = vi.fn();
(useRouterOriginal as unknown as { useRouter: typeof useRouterMock }).useRouter = useRouterMock;

describe("SearchForm", () => {
  const setSearchTermMock = vi.fn();
  const initialSearchTerm = "initialSearchTerm";

  beforeEach(() => {
    setSearchTermMock.mockClear();
    const pushMock = vi.fn();
    useRouterMock.mockReturnValue({ push: pushMock });
  });

  test("renders search form with initial value", () => {
    render(<SearchForm searchTerm={initialSearchTerm} setSearchTerm={setSearchTermMock} />);

    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    expect(searchInput.value).toBe(initialSearchTerm);
  });

  test("updates search term on input change", () => {
    render(<SearchForm searchTerm={initialSearchTerm} setSearchTerm={setSearchTermMock} />);

    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test search" } });

    expect(setSearchTermMock).toHaveBeenCalledWith("test search");
  });

  test("submits with an empty search term", () => {
    const pushMock = vi.fn();
    useRouterMock.mockReturnValue({ push: pushMock });

    render(<SearchForm searchTerm="" setSearchTerm={setSearchTermMock} />);

    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "" } });

    const form = screen.getByTestId("search-form");
    fireEvent.submit(form);

    expect(pushMock).toHaveBeenCalledWith("/");
  });

  test("submits with a search term", () => {
    const pushMock = vi.fn();
    useRouterMock.mockReturnValue({ push: pushMock });

    render(<SearchForm searchTerm="search term" setSearchTerm={setSearchTermMock} />);

    const form = screen.getByTestId("search-form");
    fireEvent.submit(form);

    expect(pushMock).toHaveBeenCalledWith("/?search=search term");
  });

  test("handles Enter key press on input", () => {
    const pushMock = vi.fn();
    useRouterMock.mockReturnValue({ push: pushMock });

    render(<SearchForm searchTerm="search term" setSearchTerm={setSearchTermMock} />);

    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter", charCode: 13 });

    expect(pushMock).toHaveBeenCalledWith("/?search=search term");
  });

  test("does not call setSearchTerm on input change if value is the same", () => {
    render(<SearchForm searchTerm={initialSearchTerm} setSearchTerm={setSearchTermMock} />);

    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: initialSearchTerm } });

    expect(setSearchTermMock).not.toHaveBeenCalled();
  });

  test("trims input value before setting search term", () => {
    render(<SearchForm searchTerm="" setSearchTerm={setSearchTermMock} />);

    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "  test search  " } });

    expect(setSearchTermMock).toHaveBeenCalledWith("test search");
  });
});
