import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PeopleResponse } from "../types/types";

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query<PeopleResponse, { searchTerm: string; page: number }>({
      query: ({ searchTerm, page }) => `people/?search=${searchTerm}&page=${page}`,
    }),
  }),
});

export const { useGetPeopleQuery } = peopleApi;
