import React, { Component } from "react";
import { SearchInputProps, SearchInputState } from "../../../types/types";

export class SearchInput extends Component<SearchInputProps, SearchInputState> {
  constructor(props: SearchInputProps) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(): void {
    this.props.onSearch(this.state.searchTerm);
  }

  render(): React.ReactNode {
    return (
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Find..."
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button className="search-button" onClick={this.handleSubmit}>
          Search
        </button>
      </div>
    );
  }
}
