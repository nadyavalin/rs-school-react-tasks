import { Link } from "react-router-dom";

export function SideSection() {
  return (
    <>
      {" "}
      <Link to={`/`} className="close-button">
        Close
      </Link>
      <div className="side-section">Side Page with detailed information</div>
    </>
  );
}
