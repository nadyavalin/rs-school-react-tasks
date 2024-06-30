import React from "react";
import "./App.css";
import { Main } from "./components/main/main";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
