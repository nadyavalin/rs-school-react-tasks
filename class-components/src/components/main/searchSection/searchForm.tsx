import "./styles.css";
import React, { Component } from "react";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../../../utils/utils";

interface SearchFormState {
  searchTerm: string;
}

interface SearchFormProps {
  onSearch: (searchTerm: string) => void;
}

export class SearchForm extends Component<SearchFormProps, SearchFormState> {
  constructor(props: SearchFormProps) {
    super(props);
    this.state = {
      searchTerm: getItemFromLocalStorage<string>("searchTerm") ?? "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchTerm: event.target.value.trim() });
  };

  handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    setItemToLocalStorage("searchTerm", this.state.searchTerm);
    this.props.onSearch(this.state.searchTerm);
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      this.handleSubmit(event);
    }
  };

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder=""
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    );
  }
}
