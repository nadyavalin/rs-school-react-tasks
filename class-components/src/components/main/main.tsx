import React from "react";
import "./styles.css";
import { MainContent } from "./mainContent";

export class Main extends React.Component {
  render(): React.ReactNode {
    return (
      <main className="main">
        <MainContent />
      </main>
    );
  }
}
