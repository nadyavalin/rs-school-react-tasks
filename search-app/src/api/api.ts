import { PeopleResponse } from "../types/types";

export const fetchPeople = async (searchTerm = "", pageNumber = 1): Promise<PeopleResponse> => {
  const searchParams = new URLSearchParams({ search: searchTerm, page: `${pageNumber}` });
  const response = await fetch(`https://swapi.dev/api/people/?${searchParams}`);
  return response.json();
};
