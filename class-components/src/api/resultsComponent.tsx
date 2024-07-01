import React, { Component } from "react";
import "./styles.css";
import { FilmsResponse, ResultsComponentProps, ResultsComponentState } from "../types/types";

export class ResultsComponent extends Component<ResultsComponentProps, ResultsComponentState> {
  constructor(props: ResultsComponentProps) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount(): void {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then((result: FilmsResponse) => {
        this.setState({
          isLoaded: true,
          items: result.results,
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
          {items.map((item) => (
            <li key={item.title}>
              <p className="film-title__text">
                Film title: <span className="film-title__item">{item.title}</span>
              </p>
              <p className="film-date__text">
                Release date: <span className="film-date__item">{item.release_date}</span>
              </p>
              <p className="film-description__text">
                Film description:{" "}
                <span className="film-description__item">{item.opening_crawl}</span>
              </p>
            </li>
          ))}
        </ul>
      );
    }
  }
}
