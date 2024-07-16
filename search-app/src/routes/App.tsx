import "./App.css";
import { Layout } from "../Layout";
import { Link } from "react-router-dom";

export function App() {
  return (
    <>
      <div id="sidebar">
        <nav className="nav">
          <ul className="navigation">
            <li>
              <Link to={`/`}>Main</Link>
            </li>
            <li>
              <Link to={`/error-page/404`}>Page 404</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Layout />
    </>
  );
}
