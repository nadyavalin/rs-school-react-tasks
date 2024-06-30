import React from "react";
import "./styles.css";
import { SearchSection } from "./searchSection/searchSection";
import { ResultsSection } from "./resultsSection/resultsSection";

export class Main extends React.Component {
  render(): React.ReactNode {
    return (
      <main className="main">
        <SearchSection />
        <hr />
        <ResultsSection />
      </main>
    );
  }
}
