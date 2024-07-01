import "./styles.css";
import { Component } from "react";
import {
  FilmItem,
  FilmsResponse,
  ResultsComponentProps,
  ResultsComponentState,
} from "../types/types";

const fetchFilms = async (resultsTerm = ""): Promise<FilmsResponse> => {
  const response = await fetch(`https://swapi.dev/api/films/?search=${resultsTerm}`);
  return response.json();
};

export class ResultsComponent extends Component<ResultsComponentProps, ResultsComponentState> {
  constructor(props: ResultsComponentProps) {
    super(props);
    this.state = {
      errorMessage: "",
      isLoaded: false,
      items: [],
      resultsTerm: "",
    };
  }

  componentDidMount(): void {
    this.fetchFilms();
  }

  fetchFilms = async (resultsTerm?: string) => {
    try {
      const data = await fetchFilms(resultsTerm);
      this.setState({
        items: data.results,
        errorMessage: "",
      });
    } catch (error) {
      this.setState({
        errorMessage: (error as Error).message,
      });
    } finally {
      this.setState({
        isLoaded: true,
      });
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      resultsTerm: event.target.value,
    });
  };

  render(): React.ReactNode {
    const { errorMessage, isLoaded, items } = this.state;
    if (errorMessage) {
      return <p>Error: {errorMessage}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <input
            className="search-input"
            type="text"
            placeholder="Find..."
            value={this.state.resultsTerm}
            onChange={this.handleChange}
          />
          <button className="search-button" onClick={() => this.fetchFilms(this.state.resultsTerm)}>
            Search
          </button>
          <ul>
            {items.map((item: FilmItem) => (
              <li key={item.episode_id}>
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
        </div>
      );
    }
  }
}
