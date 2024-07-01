import "./styles.css";
import React, { Component } from "react";
import { SearchInputProps, SearchInputState } from "../../../types/types";

export class SearchForm extends Component<SearchInputProps, SearchInputState> {
  constructor(props: SearchInputProps) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(
    event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>,
  ): void {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  }

  handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Enter") {
      this.handleSubmit(event);
    }
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Find..."
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
