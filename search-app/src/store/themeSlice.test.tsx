import { themeSlice, toggleTheme } from "./themeSlice";
import { it, describe } from "vitest";

describe("themeSlice", () => {
  it("should change isLightMode to true when toggleTheme is called", () => {
    const initialState = { isLightMode: false };
    const state = themeSlice.reducer(initialState, toggleTheme());
    expect(state.isLightMode).toBe(true);
  });

  it("should change isLightMode to false when toggleTheme is called again", () => {
    const initialState = { isLightMode: true };
    const state = themeSlice.reducer(initialState, toggleTheme());
    expect(state.isLightMode).toBe(false);
  });
});
