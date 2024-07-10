import "./styles.css";
import { App } from "../App";
import { Link } from "react-router-dom";
import { SideSection } from "./sideSection";

export async function loader() {
  const sideSection = await SideSection();
  return { sideSection };
}

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
              <Link to={`pages/side-section`}>Side Section</Link>
            </li>
          </ul>
        </nav>
      </div>
      <App />
    </>
  );
}
