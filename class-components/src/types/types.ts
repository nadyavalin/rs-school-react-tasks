export interface PeopleItem {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
}

export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PeopleItem[];
}
