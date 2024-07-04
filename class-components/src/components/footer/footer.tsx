import React from "react";
import "./styles.css";

export class Footer extends React.Component {
  render(): React.ReactNode {
    return (
      <footer className="footer">
        <a href="https://github.com/nadyavalin" target="_blank" rel="noreferrer">
          nadyavalin GitHub
        </a>
      </footer>
    );
  }
}
