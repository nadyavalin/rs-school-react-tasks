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
      isLoading: false,
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
        isLoading: true,
        isError: false,
      });
      const data = await fetchPeople(resultsTerm);
      this.setState({
        people: data.results,
        errorMessage: "",
      });
    } catch (error) {
      this.setState({
        errorMessage: (error as Error).message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  render(): React.ReactNode {
    const { errorMessage, isLoading, people, isError } = this.state;

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
        <section className="results-section">
          {isLoading ? (
            <div className="loader-container">
              <div className="loader" />
            </div>
          ) : (
            <PeopleList people={people} />
          )}
        </section>
      </>
    );
  }
}
