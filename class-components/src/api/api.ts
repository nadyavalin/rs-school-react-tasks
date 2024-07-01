import { FilmsResponse } from "../types/types";

export const fetchFilms = async (resultsTerm = ""): Promise<FilmsResponse> => {
  const response = await fetch(`https://swapi.dev/api/films/?search=${resultsTerm}`);
  return response.json();
};
