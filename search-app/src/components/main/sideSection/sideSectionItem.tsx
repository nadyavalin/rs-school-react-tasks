import styles from "./styles.module.css";
import Link from "next/link";
import { IPerson } from "../../../types/types";
import { cross } from "../../svg/svg";

interface PersonDetailsProp {
  personDetails?: IPerson;
}

export function SideSectionItem({ personDetails }: PersonDetailsProp) {
  return (
    <>
      <aside className={styles.sideSection} data-testid="side-section-item">
        <div className={styles.crossContainer}>
          <Link href="/" aria-label="Close" className={styles.cross}>
            <svg
              dangerouslySetInnerHTML={{ __html: cross }}
              width="22px"
              height="22px"
              viewBox="0 0 22 22"
              fill="none"
            />
          </Link>
        </div>

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
