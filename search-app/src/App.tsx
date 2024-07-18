import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteOutlet } from "./routes/outlet";
import { ErrorPage } from "./error-page";
import { SideSection } from "./components/sideSection/sideSection";

export const App = (): ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RouteOutlet />}>
          <Route path="/:key" element={<SideSection />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
