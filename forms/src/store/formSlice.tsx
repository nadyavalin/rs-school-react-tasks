import { createSlice } from "@reduxjs/toolkit";
import { FormState } from "../types/types";

const initialState = {
  forms: [] as FormState[],
  lastSubmittedForm: null as FormState | null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm(state, action) {
      state.forms.push(action.payload);
      state.lastSubmittedForm = action.payload;
    },
  },
});

export const { addForm } = formSlice.actions;
export default formSlice.reducer;
