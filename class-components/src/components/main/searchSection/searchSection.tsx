import React from "react";

import "./styles.css";
import { ResultsComponent } from "../../../api/resultsComponent";

export class SearchSection extends React.Component {
  render(): React.ReactNode {
    return (
      <section className="search-section">
        <ResultsComponent />
        <form className="search-form"></form>
      </section>
    );
  }
}
