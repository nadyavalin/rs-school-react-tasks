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
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
