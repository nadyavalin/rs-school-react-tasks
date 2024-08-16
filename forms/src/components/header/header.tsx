import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>Forms App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/firstForm">First Form</Link>
          </li>
          <li>
            <Link to="/secondForm">Second Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
