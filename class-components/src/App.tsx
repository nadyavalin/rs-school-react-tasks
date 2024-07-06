import "./App.css";
import { Main } from "./components/main/main";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
