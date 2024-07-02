import "./styles.css";
import React, { Component } from "react";
import { fetchFilms } from "../../api/api";
import { ResultsComponentProps, ResultsComponentState } from "../../types/types";
import { SearchForm } from "./searchSection/searchForm";
import { FilmList } from "./resultsSection/filmList";
import { getItemFromLocalStorage } from "../../utils/utils";
import { ErrorBoundary } from "../../ErrorBoundary";

export class MainContent extends Component<ResultsComponentProps, ResultsComponentState> {
  constructor(props: ResultsComponentProps) {
    super(props);
    this.state = {
      errorMessage: "",
      isLoaded: false,
      films: [],
      resultsTerm: "",
    };
  }

  componentDidMount(): void {
    const storedSearchTerm = getItemFromLocalStorage<string>("searchTerm");
    if (storedSearchTerm) {
      this.fetchFilms(storedSearchTerm);
    } else {
      this.fetchFilms();
    }
  }

  fetchFilms = async (resultsTerm?: string) => {
    try {
      const data = await fetchFilms(resultsTerm);
      this.setState({
        films: data.results,
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

  render(): React.ReactNode {
    const { errorMessage, isLoaded, films } = this.state;
    if (errorMessage) {
      return <p>Error: {errorMessage}</p>;
    }
    if (!isLoaded) {
      return <p>Loading...</p>;
    }
    return (
      <>
        <section className="search-section">
          <SearchForm onSearch={this.fetchFilms} />
        </section>
        <div className="hr-line"></div>
        <section className="results-section">
          <ErrorBoundary>
            <FilmList films={films} />
          </ErrorBoundary>
        </section>
      </>
    );
  }
}
