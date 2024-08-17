import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "../types/types";

const initialState = {
  forms: [] as FormState[],
  lastSubmittedForm: null as FormState | null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<FormState>) {
      state.forms.push({ ...action.payload, isNew: true });
      state.lastSubmittedForm = { ...action.payload, isNew: true };
    },
    removeNewIndicator(state, action: PayloadAction<number>) {
      const formIndex = state.forms.findIndex((form) => form.id === action.payload);
      if (formIndex !== -1) {
        state.forms[formIndex].isNew = false;
      }
    },
  },
});

export const { addForm, removeNewIndicator } = formSlice.actions;
export default formSlice.reducer;
