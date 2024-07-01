import React from "react";
import "./styles.css";
import { ResultsComponent } from "./resultsComponent";

export class ResultsSection extends React.Component {
  render(): React.ReactNode {
    return <section className="results-section">{<ResultsComponent />}</section>;
  }
}
