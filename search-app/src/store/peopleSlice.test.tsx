import { configureStore } from "@reduxjs/toolkit";
import { peopleSliceReducer, selectItem } from "./peopleSlice";
import { setItemToLocalStorage } from "../utils/utils";
import { RootState } from "./store";

vitest.mock("../utils/utils");

describe("People Slice Tests", () => {
  let store: ReturnType<typeof configureStore<RootState>>;

  beforeEach(() => {
    vitest.clearAllMocks();
    store = configureStore({ reducer: peopleSliceReducer });
  });

  it("should return the initial state", () => {
    expect(store.getState()).toEqual({
      selectedItems: [],
    });
  });

  it("should handle selectItem with itemId", () => {
    const itemId = "123";
    store.dispatch(selectItem({ itemId }));
    expect(store.getState().selectedItems).toEqual([itemId]);
    expect(setItemToLocalStorage).toHaveBeenCalledWith("selectedItems", [itemId]);
  });

  it('should handle selectItem with "all"', () => {
    store.dispatch(selectItem({ itemId: "1" }));
    store.dispatch(selectItem({ itemId: "2" }));
    store.dispatch(selectItem({ itemId: "all" }));
    expect(store.getState().selectedItems).toEqual([]);
    expect(setItemToLocalStorage).toHaveBeenCalledWith("selectedItems", []);
  });
});
