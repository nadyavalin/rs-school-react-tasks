import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Flyout } from "./flyout";

describe("Flyout Component", () => {
  let store: ReturnType<typeof configureStore>;

  test("renders null if no items are selected", () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    expect(screen.queryByText("You have selected 0 items.")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
