import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Person } from "./person";
import { IPerson } from "../../../types/types";
import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice } from "../../../store/peopleSlice";
import { Provider } from "react-redux";

const mockPersonData: IPerson = {
  name: "Luke Skywalker",
  birth_year: "19BBY",
  eye_color: "blue",
  gender: "male",
  hair_color: "blond",
  height: "172",
  mass: "77",
  skin_color: "fair",
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
};

const mockDispatch = vitest.fn();
vitest.mock("../../../hooks/hooks", () => ({
  useAppDispatch: () => mockDispatch,
}));

const store = configureStore({
  reducer: {
    people: peopleSlice.reducer,
  },
});

describe("Person Component", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test("renders person data correctly", () => {
    render(
      <Provider store={store}>
        <Router>
          <Person person={mockPersonData} isSelected={false} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("Height: 172")).toBeInTheDocument();
    expect(screen.getByText("Mass: 77")).toBeInTheDocument();
    expect(screen.getByText("Birth Year: 19BBY")).toBeInTheDocument();
  });

  test("dispatches selectItem action when checkbox is toggled", () => {
    render(
      <Provider store={store}>
        <Router>
          <Person person={mockPersonData} isSelected={false} />
        </Router>
      </Provider>,
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledWith(
      peopleSlice.actions.selectItem({ itemId: "Luke Skywalker" }),
    );
  });
});
