import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "",
    picture: null,
    terms: false,
  },
  reducers: {
    updateForm(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
