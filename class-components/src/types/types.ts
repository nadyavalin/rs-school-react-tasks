export interface FilmItem {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface FilmsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: FilmItem[];
}

export interface ResultsComponentState {
  errorMessage: string;
  isLoaded: boolean;
  films: FilmItem[];
  resultsTerm: string;
}

export interface ResultsComponentProps {}

export interface SearchSectionProps {
  fetchFilms: (resultsTerm: string) => Promise<void>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}

export interface SearchInputState {
  searchTerm: string;
}

export interface SearchInputProps {
  onSearch: (term: string) => void;
}
