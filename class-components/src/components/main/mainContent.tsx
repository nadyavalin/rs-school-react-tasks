import "./styles.css";
import React, { Component } from "react";
import { fetchPeople } from "../../api/api";
import { ResultsComponentProps, ResultsComponentState } from "../../types/types";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { getItemFromLocalStorage } from "../../utils/utils";
import { ErrorBoundary } from "../../ErrorBoundary";
// import { TriggerErrorButton } from "../../triggerErrorButton";

export class MainContent extends Component<ResultsComponentProps, ResultsComponentState> {
  constructor(props: ResultsComponentProps) {
    super(props);
    this.state = {
      errorMessage: "",
      isLoaded: false,
      people: [],
      resultsTerm: "",
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
        isLoaded: true,
      });
    }
  };

  render(): React.ReactNode {
    const { errorMessage, isLoaded, people: people } = this.state;
    if (errorMessage) {
      return <p>Error: {errorMessage}</p>;
    }
    if (!isLoaded) {
      return <p>Loading...</p>;
    }
    return (
      <>
        <section className="search-section">
          <SearchForm onSearch={this.fetchPeople} />
        </section>
        <div className="hr-line"></div>
        <section className="results-section">
          <ErrorBoundary>
            <PeopleList people={people} />
            {/* <TriggerErrorButton /> */}
            <button
              className="trigger-error-button"
              onClick={() => {
                try {
                  throw new Error("error");
                } catch (error) {
                  console.error("An error has occurred:", error);
                }
              }}
            >
              Trigger Error
            </button>
          </ErrorBoundary>
        </section>
      </>
    );
  }
}
