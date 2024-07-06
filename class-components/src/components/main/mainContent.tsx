import "./styles.css";
import React, { Component } from "react";
import { fetchPeople } from "../../api/api";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { getItemFromLocalStorage } from "../../utils/utils";
import { ErrorBoundary } from "../errorBoundary/errorBoundary";
import { IPerson } from "../../types/types";

export interface ResultsComponentState {
  errorMessage: string;
  isLoading: boolean;
  people: IPerson[];
}

export class MainContent extends Component<object, ResultsComponentState> {
  constructor(props: object) {
    super(props);
    this.state = {
      errorMessage: "",
      isLoading: false,
      people: [],
    };
  }

  componentDidMount(): void {
    this.fetchPeople(getItemFromLocalStorage<string>("searchTerm") ?? "");
  }

  fetchPeople = async (searchTerm?: string) => {
    try {
      this.setState({
        isLoading: true,
        errorMessage: "",
      });
      const data = await fetchPeople(searchTerm);
      this.setState({
        people: data.results,
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
    const { isLoading, errorMessage } = this.state;
    if (errorMessage) {
      return <p>Error: {errorMessage}</p>;
    }

    return (
      <>
        <section className="search-section">
          <SearchForm onSearch={this.fetchPeople} />
        </section>
        <section className="results-section">
          {isLoading ? (
            <div className="loader-container">
              <div className="loader" />
            </div>
          ) : (
            <ErrorBoundary>
              <PeopleList people={this.state.people} />
            </ErrorBoundary>
          )}
        </section>
      </>
    );
  }
}
