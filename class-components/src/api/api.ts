import { PeopleResponse } from "../types/types";

export const fetchPeople = async (resultsTerm = ""): Promise<PeopleResponse> => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${resultsTerm}`);
  return response.json();
};
