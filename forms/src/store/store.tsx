import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import countriesReducer from "./countriesSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    countries: countriesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
