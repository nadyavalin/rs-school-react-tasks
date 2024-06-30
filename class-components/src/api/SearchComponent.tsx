import React, { Component } from "react";
import {
  InitialResponse,
  ResourceResponse,
  SearchComponentProps,
  SearchComponentState,
  Person,
  Planet,
  Film,
  Species,
  Vehicle,
  StarShip,
} from "../types/types";

export class SearchComponent extends Component<SearchComponentProps, SearchComponentState> {
  constructor(props: SearchComponentProps) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount(): void {
    fetch("https://swapi.dev/api/")
      .then((res) => res.json())
      .then((result: InitialResponse) => {
        Promise.all([
          fetch(result.people).then((res) => res.json() as Promise<ResourceResponse<Person>>),
          fetch(result.planets).then((res) => res.json() as Promise<ResourceResponse<Planet>>),
          fetch(result.films).then((res) => res.json() as Promise<ResourceResponse<Film>>),
          fetch(result.species).then((res) => res.json() as Promise<ResourceResponse<Species>>),
          fetch(result.vehicles).then((res) => res.json() as Promise<ResourceResponse<Vehicle>>),
          fetch(result.starShips).then((res) => res.json() as Promise<ResourceResponse<StarShip>>),
        ])
          .then(
            ([
              peopleResponse,
              planetsResponse,
              filmsResponse,
              speciesResponse,
              vehiclesResponse,
              starShipsResponse,
            ]) => {
              const allItems: (
                | ResourceResponse<Person>
                | ResourceResponse<Planet>
                | ResourceResponse<Film>
                | ResourceResponse<Species>
                | ResourceResponse<Vehicle>
                | ResourceResponse<StarShip>
              )[] = [
                peopleResponse,
                planetsResponse,
                filmsResponse,
                speciesResponse,
                vehiclesResponse,
                starShipsResponse,
              ];

              this.setState({
                isLoaded: true,
                items: allItems,
              });
            },
          )
          .catch((error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          });
      })
      .catch((error: Error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  render(): React.ReactNode {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <ul>
          {items.flatMap((item) =>
            item.results.map((result) => <li key={result.name}>{result.name}</li>),
          )}
        </ul>
      );
    }
  }
}
