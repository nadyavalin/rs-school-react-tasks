import { Outlet } from "react-router-dom";
import "../index.css";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
