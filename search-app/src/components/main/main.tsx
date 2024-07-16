import "./styles.css";
import { MainContent } from "./mainContent";
import { ErrorBoundary } from "../errorBoundary/errorBoundary";
import { ReactElement } from "react";

export const Main = (): ReactElement => (
  <main className="main" data-testid="main">
    <ErrorBoundary>
      <MainContent />
    </ErrorBoundary>
  </main>
);
