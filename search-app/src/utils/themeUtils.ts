"use client";

import { setupListeners } from "@reduxjs/toolkit/query/react";
import { store } from "../store/store";
import { themeSlice } from "../store/themeSlice";

export const { toggleTheme } = themeSlice.actions;
setupListeners(store.dispatch);
