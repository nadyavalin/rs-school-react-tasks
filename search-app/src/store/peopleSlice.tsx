import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../utils/utils";
import { IPerson } from "../types/types";

export interface PeopleState {
  selectedItems: IPerson[];
}

const initialState: PeopleState = {
  selectedItems: [],
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<IPerson>) => {
      const person = action.payload;
      const existingIndex = state.selectedItems.findIndex((item) => item.name === person.name);
      if (existingIndex !== -1) {
        state.selectedItems.splice(existingIndex, 1);
      } else {
        state.selectedItems = [...state.selectedItems, person];
      }
      setItemToLocalStorage("selectedItems", state.selectedItems);
    },
    unselectAll: (state) => {
      state.selectedItems = [];
      setItemToLocalStorage("selectedItems", state.selectedItems);
    },
  },
});

export const { selectItem, unselectAll } = peopleSlice.actions;

export const peopleSliceReducer = peopleSlice.reducer;

export const usePeopleSlice = () => {
  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector((state) => state.people.selectedItems);

  useEffect(() => {
    const storedItems = getItemFromLocalStorage<IPerson[]>("selectedItems");
    if (storedItems && Array.isArray(storedItems)) {
      storedItems.forEach((person) => dispatch(selectItem(person)));
    }
  }, [dispatch]);

  return {
    selectItem,
    unselectAll,
    selectedItems,
  };
};
