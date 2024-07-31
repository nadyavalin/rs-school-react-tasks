import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { ReactElement } from "react";
import { MainContent } from "../components/main/mainContent";
import { ErrorBoundary } from "../components/errorBoundary/errorBoundary";

const App = (): ReactElement => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
