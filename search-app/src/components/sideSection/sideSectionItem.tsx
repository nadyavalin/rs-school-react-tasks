import "./styles.css";
import { Link } from "react-router-dom";
import { IPerson } from "../../types/types";

interface PersonDetailsProp {
  personDetails: IPerson;
  handleClickCard: (id: string) => void;
}

export function SideSectionItem({ personDetails, handleClickCard }: PersonDetailsProp) {
  return (
    <>
      <Link to={`/`} className="close-button" onClick={() => handleClickCard(personDetails.name)}>
        Close
      </Link>
      <aside className="side-section">
        <h2>Details</h2>
        <div>
          <h3>{personDetails.name}</h3>
        </div>
        <ul>
          <li>Birth year: {personDetails.birth_year}</li>
          <li>Eye color: {personDetails.eye_color}</li>
          <li>Gender: {personDetails.gender}</li>
          <li>Hair color: {personDetails.hair_color}</li>
          <li>Height: {personDetails.height}</li>
          <li>Mass: {personDetails.mass}</li>
          <li>Skin color: {personDetails.skin_color}</li>
          <li>Created: {personDetails.created}</li>
          <li>Edited: {personDetails.edited}</li>
        </ul>
      </aside>
    </>
  );
}
