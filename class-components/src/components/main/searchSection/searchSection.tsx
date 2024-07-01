import React from "react";
import "./styles.css";

export class SearchSection extends React.Component {
  render(): React.ReactNode {
    return (
      <section className="search-section">
        <form className="search-form">
          <input
            className="search-input"
            placeholder="Find..."
            onChange={(event) => console.log(event.target.value)}
          ></input>
          <button className="search-button">Search</button>
        </form>
      </section>
    );
  }
}
