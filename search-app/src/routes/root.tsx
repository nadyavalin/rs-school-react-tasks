import "./styles.css";
import { App } from "../App";

export function Root() {
  return (
    <>
      <div id="sidebar">
        <nav className="nav">
          <ul className="navigation">
            <li>
              <a href={`/`}>Main</a>
            </li>
            <li>
              <a href={`/pages/404`}>Page 404</a>
            </li>
          </ul>
        </nav>
      </div>
      <App />
      <div id="detail"></div>
    </>
  );
}
