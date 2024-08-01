import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  isLightMode: boolean;
}

const initialState: ThemeState = {
  isLightMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isLightMode = !state.isLightMode;
      document.body.setAttribute("theme", state.isLightMode ? "light" : "dark");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
