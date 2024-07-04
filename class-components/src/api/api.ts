import { PeopleResponse } from "../types/types";

export const fetchPeople = async (searchTerm = ""): Promise<PeopleResponse> => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
  return response.json();
};
