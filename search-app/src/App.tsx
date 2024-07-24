import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./error-page";
import { SideSection } from "./components/main/sideSection/sideSection";
import { MainContent } from "./components/main/mainContent";
import { ErrorBoundary } from "./components/errorBoundary/errorBoundary";

export const App = (): ReactElement => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainContent />}>
            <Route path="/:key" element={<SideSection />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
};
