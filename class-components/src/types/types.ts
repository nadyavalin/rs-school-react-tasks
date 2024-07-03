export interface PeopleItem {
  name: string;
  height: string;
  mass: string;
}

export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PeopleItem[];
}

export interface ResultsComponentState {
  errorMessage: string;
  isLoaded: boolean;
  people: PeopleItem[];
  resultsTerm: string;
  isError: boolean;
}

export interface ResultsComponentProps {}

export interface SearchFormState {
  searchTerm: string;
}
