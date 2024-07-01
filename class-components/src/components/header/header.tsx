import React from "react";
import "./styles.css";

export class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className="header">
        <h1>Search Star Wars Films</h1>
      </header>
    );
  }
}
