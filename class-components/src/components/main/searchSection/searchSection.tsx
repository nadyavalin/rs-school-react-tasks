import React from "react";
import "./styles.css";
// import { SearchInput } from "./searchInput";

export class SearchSection extends React.Component {
  render(): React.ReactNode {
    return (
      <section className="search-section">
        <form className="search-form">{/* <SearchInput /> */}</form>
      </section>
    );
  }
}
