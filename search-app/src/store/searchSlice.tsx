import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPerson, PeopleResponse } from "../types/types";

type Search = IPerson;

type ResultState = {
  peopleResponse: PeopleResponse;
  isLoading: boolean;
};

const initialState: ResultState = {
  peopleResponse: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  isLoading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getPeople(state, action: PayloadAction<PeopleResponse>) {
      state.peopleResponse = action.payload;
      state.isLoading = false;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { getPeople, setIsLoading } = searchSlice.actions;

export const createSearchArray = (searchTerm: string): Search[] => {
  return [
    {
      name: searchTerm,
      birth_year: "unknown",
      eye_color: "unknown",
      gender: "unknown",
      hair_color: "unknown",
      height: "unknown",
      mass: "unknown",
      skin_color: "unknown",
      created: "unknown",
      edited: "unknown",
    },
  ];
};

export default searchSlice.reducer;
