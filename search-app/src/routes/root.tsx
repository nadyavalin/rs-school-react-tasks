import "./styles.css";
import { App } from "../App";
import { Link } from "react-router-dom";

export function Root() {
  return (
    <>
      <div id="sidebar">
        <nav className="nav">
          <ul className="navigation">
            <li>
              <Link to={``}>Main</Link>
            </li>
            <li>
              <Link to={`page-404`}>Page 404</Link>
            </li>
          </ul>
        </nav>
      </div>
      <App />
    </>
  );
}
