import { createSlice } from "@reduxjs/toolkit";

interface CountryState {
  countries: string[];
}

const initialState: CountryState = {
  countries: ["USA", "Canada", "UK", "Australia", "Russia", "France"],
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
});

export default countrySlice.reducer;
