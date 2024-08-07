import { configureStore } from "@reduxjs/toolkit";
import { peopleApi } from "../api/api";
import stateReducer from "./stateSlice";
import { themeSlice } from "./themeSlice";
import { peopleSlice } from "./peopleSlice";

export const store = configureStore({
  reducer: {
    state: stateReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
    theme: themeSlice.reducer,
    people: peopleSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

describe("Redux Store", () => {
  it("should initialize the store with the correct reducers", () => {
    const initialState = store.getState();
    const expectedReducers = ["state", peopleApi.reducerPath, "theme", "people"];

    expectedReducers.forEach((reducer) => {
      expect(initialState).toHaveProperty(reducer);
    });
  });

  it("should return the correct initial state from each slice", () => {
    const initialState = store.getState();

    expect(initialState.state).toEqual(stateReducer(undefined, { type: "@@INIT" }));
    expect(initialState[peopleApi.reducerPath]).toEqual(
      peopleApi.reducer(undefined, { type: "@@INIT" }),
    );
    expect(initialState.theme).toEqual(themeSlice.reducer(undefined, { type: "@@INIT" }));
    expect(initialState.people).toEqual(peopleSlice.reducer(undefined, { type: "@@INIT" }));
  });
});
