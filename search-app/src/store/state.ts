import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";

export const State = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof State.getState>;
export type AppDispatch = typeof State.dispatch;
