import { store } from "./store";
import { themeSlice } from "./themeSlice";

describe("Redux Store", () => {
  it("should initialize the store with the correct reducers", () => {
    const initialState = store.getState();
    const expectedReducers = ["theme"];

    expectedReducers.forEach((reducer) => {
      expect(initialState).toHaveProperty(reducer);
    });
  });

  it("should return the correct initial state from each slice", () => {
    const initialState = store.getState();

    expect(initialState.theme).toEqual(themeSlice.reducer(undefined, { type: "@@INIT" }));
  });
});
