import styles from "./styles.module.css";
import { ReactElement } from "react";

export const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <a href="https://github.com/nadyavalin" target="_blank" rel="noreferrer">
        nadyavalin GitHub
      </a>
    </footer>
  );
};
