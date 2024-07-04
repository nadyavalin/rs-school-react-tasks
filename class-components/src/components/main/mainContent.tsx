import "./styles.css";
import React, { Component } from "react";
import { fetchPeople } from "../../api/api";
import { PeopleItem } from "../../types/types";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { getItemFromLocalStorage } from "../../utils/utils";

export interface ResultsComponentState {
  errorMessage: string;
  isLoading: boolean;
  people: PeopleItem[];
  isError: boolean;
}

export class MainContent extends Component<object, ResultsComponentState> {
  constructor() {
    super({});
    this.state = {
      errorMessage: "",
      isLoading: false,
      people: [],
      isError: false,
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
        isError: false,
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

  triggerError = () => {
    this.setState({ isError: true });
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
          <button className="trigger-error-button" onClick={this.triggerError}>
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
