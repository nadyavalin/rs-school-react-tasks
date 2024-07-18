import { PeopleResponse } from "../types/types";

export const fetchPeople = async (searchParams: URLSearchParams): Promise<PeopleResponse> => {
  const response = await fetch(`https://swapi.dev/api/people/?${searchParams.toString()}`);
  return response.json();
};
