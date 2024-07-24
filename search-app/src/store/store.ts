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
