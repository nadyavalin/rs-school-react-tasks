import { PeopleResponse } from "../types/types";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

type CustomBaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }) as CustomBaseQuery,
  endpoints: (builder) => ({
    getPeople: builder.query<PeopleResponse, { searchTerm: string; page: number }>({
      query: ({ searchTerm, page }) => `people/?search=${searchTerm}&page=${page}`,
    }),
  }),
});

export const { useGetPeopleQuery } = peopleApi;
