import styles from "./styles.module.css";
import Link from "next/link";
import { IPerson } from "../../../types/types";

interface PersonDetailsProp {
  personDetails?: IPerson;
}

export function SideSectionItem({ personDetails }: PersonDetailsProp) {
  return (
    <>
      <Link href={`/`} className={styles.closeButton}>
        Close
      </Link>
      <aside className={styles.sideSection} data-testid="side-section-item">
        <h2>Details</h2>
        <div>
          <h3>{personDetails?.name}</h3>
        </div>
        <ul>
          <li>Birth year: {personDetails?.birth_year}</li>
          <li>Eye color: {personDetails?.eye_color}</li>
          <li>Gender: {personDetails?.gender}</li>
          <li>Hair color: {personDetails?.hair_color}</li>
          <li>Height: {personDetails?.height}</li>
          <li>Mass: {personDetails?.mass}</li>
          <li>Skin color: {personDetails?.skin_color}</li>
          <li>Created: {personDetails?.created}</li>
          <li>Edited: {personDetails?.edited}</li>
        </ul>
      </aside>
    </>
  );
}
