export interface InitialResponse {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starShips: string;
}

export interface ResourceResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface SearchComponentProps {}

export interface SearchComponentState {
  error: Error | null;
  isLoaded: boolean;
  items: (
    | ResourceResponse<Person>
    | ResourceResponse<Planet>
    | ResourceResponse<Film>
    | ResourceResponse<Species>
    | ResourceResponse<Vehicle>
    | ResourceResponse<StarShip>
  )[];
}

export interface Person {
  name: string;
}

export interface Planet {
  name: string;
}

export interface Film {
  name: string;
}

export interface Species {
  name: string;
}

export interface Vehicle {
  name: string;
}

export interface StarShip {
  name: string;
}
