import "./styles.css";
import React from "react";

export class Footer extends React.Component {
  render(): React.ReactNode {
    return (
      <footer className="footer">
        <div className="hr-line"></div>
        <a href="https://github.com/nadyavalin" target="_blank">
          nadyavalin GitHub
        </a>
      </footer>
    );
  }
}
