import { PeopleResponse } from "../types/types";

export const fetchSearchPeople = async (searchTerm = ""): Promise<PeopleResponse> => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
  return response.json();
};

export const fetchAllPeople = async (searchTerm = ""): Promise<PeopleResponse> => {
  const response = await fetch(`https://swapi.dev/api/people/${searchTerm}`);
  return response.json();
};
