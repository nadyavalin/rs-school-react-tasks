import { createSlice } from "@reduxjs/toolkit";

type Search = {
  name: string;
};

type SearchState = {
  list: Search[];
};

const initialState: SearchState = {
  list: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getPeople(state, actions) {
      state;
      actions;
    },
  },
});

// export const {} = searchSlice.actions;

export default searchSlice.reducer;
