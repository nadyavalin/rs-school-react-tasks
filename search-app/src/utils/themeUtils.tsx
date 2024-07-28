import { setupListeners } from "@reduxjs/toolkit/query/react";
import { themeSlice } from "../store/themeSlice";
import { store } from "../store/store";

export const { toggleTheme } = themeSlice.actions;
setupListeners(store.dispatch);
