import React from "react";
import "./styles.css";
import { SearchComponent } from "../../../api/SearchComponent";

export class ResultsSection extends React.Component {
  render(): React.ReactNode {
    return (
      <section className="results-section">
        <div>Name: </div>
        <div>Description: </div>
        <SearchComponent />
      </section>
    );
  }
}
