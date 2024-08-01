import styles from "./styles.module.css";
import Link from "next/link";
import { IPerson } from "../../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { selectItem } from "../../../../store/peopleSlice";

export const Person = ({ person }: { person: IPerson }) => {
  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector((state) => state.people.selectedItems);
  const isChecked = selectedItems.some((item) => item.name === person.name);

  const handleCheckboxChange = () => {
    dispatch(selectItem(person));
  };

  return (
    <Link key={`${person.name}`} href={`/${person.name}${location.search}`}>
      <li key={person.name} className={styles.resultsItem}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
        />
        <p>&#10066; Person name: {person.name}</p>
        <p className={styles.text}>Height: {person.height}</p>
        <p className={styles.text}>Mass: {person.mass}</p>
        <p className={styles.text}>Birth Year: {person.birth_year}</p>
      </li>
    </Link>
  );
};
