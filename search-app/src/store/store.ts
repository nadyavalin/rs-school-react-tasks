import { configureStore } from "@reduxjs/toolkit";
import { peopleApi } from "../api/api";
import stateReducer, { ResponseState } from "./stateSlice";
import { themeSlice, ThemeState } from "./themeSlice";
import { peopleSlice, PeopleState } from "./peopleSlice";

export interface IRootState {
  state: ResponseState;
  [peopleApi.reducerPath]: ReturnType<typeof peopleApi.reducer>;
  theme: ThemeState;
  people: PeopleState;
}

export const store = configureStore<IRootState>({
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
