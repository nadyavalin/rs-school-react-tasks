import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout";
import Home from "./pages/home";
import { FirstForm } from "./pages/firstForm";
import { SecondForm } from "./pages/secondForm";
import { NoPage } from "./pages/noPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/firstForm" element={<FirstForm />} />
          <Route path="/secondForm" element={<SecondForm />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
