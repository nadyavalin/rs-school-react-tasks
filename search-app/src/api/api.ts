import { PeopleResponse } from "../types/types";

export const fetchPeople = async (
  searchParams: URLSearchParams,
  page: number,
): Promise<PeopleResponse> => {
  const response = await fetch(
    `https://swapi.dev/api/people/?${searchParams.toString()}&page=${page}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch people data");
  }
  return response.json();
};
