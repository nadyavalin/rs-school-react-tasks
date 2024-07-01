import { Component } from "react";
import { fetchFilms } from "../../../api/api";
import { ResultsComponentProps, ResultsComponentState } from "../../../types/types";
import { SearchInput } from "../searchSection/searchInput";
import { FilmList } from "./filmList";

export class ResultsComponent extends Component<ResultsComponentProps, ResultsComponentState> {
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
        <SearchInput onSearch={this.fetchFilms} />
        <FilmList films={films} />
      </>
    );
  }
}
