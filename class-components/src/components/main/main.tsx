import "./styles.css";
import { MainContent } from "./mainContent";
import { ErrorBoundary } from "../errorBoundary/errorBoundary";

export const Main = () => {
  return (
    <main className="main">
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
    </main>
  );
};

export default Main;
