import "./App.css";
import { Main } from "./components/main/main";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ReactElement } from "react";

export const App = (): ReactElement => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

export default App;
