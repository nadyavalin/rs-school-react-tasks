import { render, screen, fireEvent } from "@testing-library/react";
import { SearchForm } from "./searchForm";
import { test, describe, beforeEach, vi } from "vitest";
import { useRouter } from "next/router";

vi.mock("next/router", () => ({
  useRouter: vi.fn(),
}));

describe("SearchForm", () => {
  const setSearchTermMock = vi.fn();
  const initialSearchTerm = "initialSearchTerm";

  beforeEach(() => {
    setSearchTermMock.mockClear();
    const pushMock = vi.fn();
    useRouter.mockReturnValue({ push: pushMock });
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
    useRouter.mockReturnValue({ push: pushMock });

    render(<SearchForm searchTerm="" setSearchTerm={setSearchTermMock} />);

    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "" } });

    const form = screen.getByTestId("search-form");
    fireEvent.submit(form);

    expect(pushMock).toHaveBeenCalledWith("/");
  });

  test("submits with a search term", () => {
    const pushMock = vi.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(<SearchForm searchTerm="search term" setSearchTerm={setSearchTermMock} />);

    const form = screen.getByTestId("search-form");
    fireEvent.submit(form);

    expect(pushMock).toHaveBeenCalledWith("/?search=search term");
  });
});
