import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice, selectItem, unselectAll } from "./peopleSlice";
import { setItemToLocalStorage } from "../utils/utils";
import { RootState } from "./store";
import { themeSlice } from "./themeSlice";
import { peopleApi } from "../api/api";
import stateReducer from "./stateSlice";
import { IPerson } from "../types/types";
import { it, describe } from "vitest";

vi.mock("../utils/utils");

const person: IPerson = {
  name: "John Doe",
  birth_year: "1990",
  eye_color: "brown",
  gender: "male",
  hair_color: "black",
  height: "172",
  mass: "77",
  skin_color: "fair",
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
};

describe("People Slice Tests", () => {
  let store: ReturnType<typeof configureStore<RootState>>;

  beforeEach(() => {
    vitest.clearAllMocks();
    store = configureStore({
      reducer: {
        state: stateReducer,
        [peopleApi.reducerPath]: peopleApi.reducer,
        theme: themeSlice.reducer,
        people: peopleSlice.reducer,
      },
    });
  });

  it("should handle selectItem", () => {
    store.dispatch(selectItem(person));
    expect(store.getState().people.selectedItems).toEqual([person]);
    expect(setItemToLocalStorage).toHaveBeenCalledWith("selectedItems", [person]);
  });

  it("should handle unselectAll", () => {
    store.dispatch(selectItem(person));
    expect(store.getState().people.selectedItems).toEqual([person]);

    store.dispatch(unselectAll());
    expect(store.getState().people.selectedItems).toEqual([]);
    expect(setItemToLocalStorage).toHaveBeenCalledWith("selectedItems", []);
  });
});
