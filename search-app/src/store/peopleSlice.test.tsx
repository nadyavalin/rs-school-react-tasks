import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice, selectItem } from "./peopleSlice";
import { setItemToLocalStorage } from "../utils/utils";
import { RootState } from "./store";
import { themeSlice } from "./themeSlice";
import { peopleApi } from "../api/api";
import stateReducer from "./stateSlice";

vitest.mock("../utils/utils");

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

  it("should return the initial state", () => {
    expect(store.getState().people.selectedItems).toEqual([]);
  });

  it("should handle selectItem with itemId", () => {
    const itemId = "1";
    store.dispatch(selectItem({ itemId }));
    expect(store.getState().people.selectedItems).toEqual([itemId]);
    expect(setItemToLocalStorage).toHaveBeenCalledWith("selectedItems", [itemId]);
  });

  it('should handle selectItem with "all"', () => {
    store.dispatch(selectItem({ itemId: "1" }));
    store.dispatch(selectItem({ itemId: "2" }));
    store.dispatch(selectItem({ itemId: "all" }));
    expect(store.getState().people.selectedItems).toEqual([]);
    expect(setItemToLocalStorage).toHaveBeenCalledWith("selectedItems", []);
  });
});
