import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Person } from "./person";
import { peopleApi } from "../../../../api/api";
import { IPerson } from "../../../../types/types";
import { selectItem, peopleSlice } from "../../../../store/peopleSlice";
import stateReducer from "../../../../store/stateSlice";
import { themeSlice } from "../../../../store/themeSlice";

const store = configureStore({
  reducer: {
    state: stateReducer,
    theme: themeSlice.reducer,
    people: peopleSlice.reducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});

store.dispatch = vi.fn();

const person: IPerson = {
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

const renderWithStore = (component: React.ReactNode) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Person Component", () => {
  it("renders correctly with the given person data", () => {
    renderWithStore(<Person person={person} />);

    expect(screen.getByText(/Name: Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/Height: 172/i)).toBeInTheDocument();
    expect(screen.getByText(/Mass: 77/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth Year: 19BBY/i)).toBeInTheDocument();
  });

  it("checkbox is unchecked by default and can be checked", () => {
    renderWithStore(<Person person={person} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledWith(selectItem(person));
  });
});
