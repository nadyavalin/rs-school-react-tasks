import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    age: "",
    email: "",
    gender: "",
    country: "",
    picture: null,
  },
  reducers: {
    updateForm(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
