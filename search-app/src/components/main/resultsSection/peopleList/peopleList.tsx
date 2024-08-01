import styles from "./styles.module.css";
import { Person } from "../person/person";
import { PeopleResponse } from "../../../../types/types";
import { Flyout } from "../flyout/flyout";

export const PeopleList = ({ people }: { people: PeopleResponse["results"] }) => {
  return (
    <>
      {people && people.length > 0 ? (
        <ul className={styles.results}>
          {people.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </ul>
      ) : (
        <p>The list is empty</p>
      )}
      <Flyout />
    </>
  );
};
