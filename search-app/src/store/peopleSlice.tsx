import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../utils/utils";

export interface PeopleState {
  selectedItems: string[];
}

const initialState: PeopleState = {
  selectedItems: [],
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<{ itemId: string }>) => {
      const { itemId } = action.payload;
      if (itemId === "all") {
        state.selectedItems = [];
      } else if (state.selectedItems.includes(itemId)) {
        state.selectedItems = state.selectedItems.filter((id) => id !== itemId);
      } else {
        state.selectedItems = [...state.selectedItems, itemId];
      }
      setItemToLocalStorage("selectedItems", state.selectedItems);
    },
  },
});

export const { selectItem } = peopleSlice.actions;

export const peopleSliceReducer = peopleSlice.reducer;

export const usePeopleSlice = () => {
  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector((state) => state.people.selectedItems);
  useEffect(() => {
    const storedItems = getItemFromLocalStorage<string[]>("selectedItems");
    if (storedItems && Array.isArray(storedItems)) {
      storedItems.forEach((itemId) => dispatch(selectItem({ itemId })));
    }
  }, [dispatch]);

  return {
    selectItem,
    selectedItems,
  };
};
