import { useState } from "react";
import styles from "./styles.module.css";
import { IPerson, PeopleResponse } from "../../../../types/types";
import { Person } from "../person/person";
import { Flyout } from "../flyout/flyout";

export const PeopleList = ({ people }: { people: PeopleResponse["results"] }) => {
  const [selectedItems, setSelectedItems] = useState<IPerson[]>([]);

  return (
    <>
      {people && people.length > 0 ? (
        <ul className={styles.results}>
          {people.map((person) => (
            <Person
              key={person.name}
              person={person}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          ))}
        </ul>
      ) : (
        <p>The list is empty</p>
      )}
      <Flyout />
    </>
  );
};
