import { configureStore } from "@reduxjs/toolkit";
import { peopleApi } from "../api/api";
import stateReducer from "./stateSlice";

export const store = configureStore({
  reducer: {
    state: stateReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
