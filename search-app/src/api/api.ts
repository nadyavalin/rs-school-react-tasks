import { PeopleResponse } from "../types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query<PeopleResponse, string>({
      query: (searchParams) => {
        const params = new URLSearchParams(searchParams);
        return `people/?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetPeopleQuery } = peopleApi;
