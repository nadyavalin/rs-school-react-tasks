import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent } from "@testing-library/react";
import { toggleTheme } from "../../../utils/themeUtils";
import { themeSlice } from "../../../store/themeSlice";
import { ThemeToggle } from "./themeToggle";

vi.mock("../../../utils/themeUtils", () => ({
  toggleTheme: vi.fn(() => ({ type: "toggleTheme" })),
}));

describe("ThemeToggle Component", () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        theme: themeSlice.reducer,
      },
    });
  });

  test("renders theme toggle button", () => {
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>,
    );

    expect(screen.getByRole("button", { name: "Toggle Theme" })).toBeInTheDocument();
  });

  test("dispatches toggleTheme action when button is clicked", () => {
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>,
    );

    const toggleButton = screen.getByRole("button", { name: "Toggle Theme" });
    fireEvent.click(toggleButton);

    expect(toggleTheme).toHaveBeenCalled();
  });
});
