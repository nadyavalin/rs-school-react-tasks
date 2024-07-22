import { createSlice as createStateSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPerson, PeopleResponse } from "../types/types";

type ResponseState = {
  peopleResponse: PeopleResponse;
  isLoading: boolean;
};

const initialResponseState: ResponseState = {
  peopleResponse: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  isLoading: false,
};

const stateSlice = createStateSlice({
  name: "name",
  initialState: initialResponseState,
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

export const { getPeople, setIsLoading } = stateSlice.actions;

export const createSearchArray = (searchTerm: string): IPerson[] => {
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

export default stateSlice.reducer;
