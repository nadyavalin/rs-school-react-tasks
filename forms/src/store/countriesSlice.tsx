import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  picture: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setPicture(state, action) {
      state.picture = action.payload;
    },
  },
});

export const { setCountries, setPicture } = countriesSlice.actions;
export default countriesSlice.reducer;
