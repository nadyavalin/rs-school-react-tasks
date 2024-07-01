import "./styles.css";
import { Component } from "react";
import { fetchFilms } from "../../api/api";
import { ResultsComponentProps, ResultsComponentState } from "../../types/types";
import { SearchForm } from "./searchSection/searchForm";
import { FilmList } from "./resultsSection/filmList";

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
    this.fetchFilms();
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
          <FilmList films={films} />
        </section>
      </>
    );
  }
}
