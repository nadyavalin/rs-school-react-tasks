import "./Layout.css";
import { Main } from "./components/main/main";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ReactElement } from "react";

export const Layout = (): ReactElement => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
