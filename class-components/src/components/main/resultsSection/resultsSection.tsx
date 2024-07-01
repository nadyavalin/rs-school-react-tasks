import React from "react";
import "./styles.css";
import { SearchComponent } from "../../../api/searchComponent";

export class ResultsSection extends React.Component {
  render(): React.ReactNode {
    return (
      <section className="results-section">
        <SearchComponent />
      </section>
    );
  }
}
