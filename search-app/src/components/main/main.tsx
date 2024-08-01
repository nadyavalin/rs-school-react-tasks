import styles from "./styles.module.css";
import { MainContent } from "./mainContent";
import { ErrorBoundary } from "../errorBoundary/errorBoundary";
import { ReactElement } from "react";

export const Main = (): ReactElement => (
  <main className={styles.main} data-testid="main">
    <ErrorBoundary>
      <MainContent />
    </ErrorBoundary>
  </main>
);
