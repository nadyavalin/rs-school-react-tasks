import Link from "next/link";
import styles from "./styles.module.css";
import { IPerson } from "../../../../types/types";
import { useEffect, useState } from "react";

interface PersonProps {
  person: IPerson;
  selectedItems: IPerson[];
  setSelectedItems: (selected: IPerson[]) => void;
}

export const Person = ({ person, selectedItems, setSelectedItems }: PersonProps) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectedItems && selectedItems.includes(person));
  }, [selectedItems, person]);

  const handleCheckboxChange = () => {
    if (!Array.isArray(selectedItems)) {
      return;
    }

    const newSelectedItems = isSelected
      ? selectedItems.filter((item) => item !== person)
      : [...selectedItems, person];

    setSelectedItems(newSelectedItems);
  };

  return (
    <Link href={`/${person.name}${location.search}`}>
      <li className={styles.resultsItem}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
        />
        <p>&#10066; Name: {person.name}</p>
        <p className={styles.text}>Height: {person.height}</p>
        <p className={styles.text}>Mass: {person.mass}</p>
        <p className={styles.text}>Birth Year: {person.birth_year}</p>
      </li>
    </Link>
  );
};
