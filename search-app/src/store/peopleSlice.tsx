import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    selectItem: (state, action) => {
      const { itemId } = action.payload;
      if (state.selectedItems.includes(itemId)) {
        state.selectedItems = state.selectedItems.filter((id) => id !== itemId);
      } else {
        state.selectedItems.push(itemId);
      }
    },
  },
});

export const { selectItem } = peopleSlice.actions;
