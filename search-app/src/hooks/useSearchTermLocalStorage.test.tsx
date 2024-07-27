import { useSearchTermLocalStorage } from "./useSearchTermLocalStorage";
import { getItemFromLocalStorage } from "../utils/utils";
import { act, renderHook } from "@testing-library/react";

vi.mock("../utils/utils");

describe("useSearchTermLocalStorage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize searchTerm with value from localStorage", () => {
    getItemFromLocalStorage.mockReturnValue("initialSearchTerm");

    const { result } = renderHook(() => useSearchTermLocalStorage());

    expect(result.current.searchTerm).toBe("initialSearchTerm");
    expect(getItemFromLocalStorage).toHaveBeenCalledWith("searchTerm");
  });

  it("should initialize searchTerm with empty string if no value in localStorage", () => {
    getItemFromLocalStorage.mockReturnValue(null);

    const { result } = renderHook(() => useSearchTermLocalStorage());

    expect(result.current.searchTerm).toBe("");
    expect(getItemFromLocalStorage).toHaveBeenCalledWith("searchTerm");
  });

  it("should update searchTerm state", () => {
    const { result } = renderHook(() => useSearchTermLocalStorage());

    act(() => {
      result.current.setSearchTerm("newSearchTerm");
    });

    expect(result.current.searchTerm).toBe("newSearchTerm");
  });
});
