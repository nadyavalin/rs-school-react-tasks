import "./styles.css";
import React, { Component } from "react";
import { fetchPeople } from "../../api/api";
import { ResultsComponentProps, ResultsComponentState } from "../../types/types";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { getItemFromLocalStorage } from "../../utils/utils";

export class MainContent extends Component<ResultsComponentProps, ResultsComponentState> {
  constructor(props: ResultsComponentProps) {
    super(props);
    this.state = {
      errorMessage: "",
      isLoaded: false,
      people: [],
      resultsTerm: "",
      isError: false,
    };
  }

  componentDidMount(): void {
    const storedSearchTerm = getItemFromLocalStorage<string>("searchTerm");
    if (storedSearchTerm) {
      this.fetchPeople(storedSearchTerm);
    } else {
      this.fetchPeople();
    }
  }

  fetchPeople = async (resultsTerm?: string) => {
    try {
      this.setState({
        isLoaded: false,
        isError: false,
      });
      const data = await fetchPeople(resultsTerm);
      this.setState({
        people: data.results,
        errorMessage: "",
        isLoaded: true,
      });
    } catch (error) {
      this.setState({
        errorMessage: (error as Error).message,
        isLoaded: true,
      });
    } finally {
      this.setState({
        isLoaded: true,
      });
    }
  };

  render(): React.ReactNode {
    const { errorMessage, isLoaded, people, isError } = this.state;

    if (errorMessage) {
      return <p>Error: {errorMessage}</p>;
    }
    if (isError) {
      throw new Error("An error occurred");
    }
    return (
      <>
        <section className="search-section">
          <button className="trigger-error-button" onClick={() => this.setState({ isError: true })}>
            Trigger Error
          </button>
          <SearchForm onSearch={this.fetchPeople} />
        </section>
        <div className="hr-line"></div>
        <section className="results-section">
          {!isLoaded && (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          )}
          {isLoaded && <PeopleList people={people} />}
        </section>
      </>
    );
  }
}
