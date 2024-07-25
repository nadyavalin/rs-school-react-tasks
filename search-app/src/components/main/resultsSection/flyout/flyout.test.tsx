import { render, screen } from "@testing-library/react";
import { Flyout } from "./flyout";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice } from "../../../../store/peopleSlice";
import { AppDispatch } from "../../../../store/store";

describe("Flyout Component", () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        people: peopleSlice.reducer,
      },
    });
  });

  test("renders correctly with selected items", () => {
    const dispatch: AppDispatch = store.dispatch;

    dispatch({
      type: "people/selectItem",
      payload: { itemId: "1" },
    });
    dispatch({
      type: "people/selectItem",
      payload: { itemId: "2" },
    });

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    expect(screen.getByText("You have selected 2 items.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Unselect All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument();
  });

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
