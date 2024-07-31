import Link from "next/link";
import { IPerson } from "../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { selectItem } from "../../../store/peopleSlice";

export const Person = ({ person }: { person: IPerson }) => {
  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector((state) => state.people.selectedItems);
  const isChecked = selectedItems.some((item) => item.name === person.name);

  const handleCheckboxChange = () => {
    dispatch(selectItem(person));
  };

  return (
    <Link key={`${person.name}`} href={`/${person.name}${location.search}`}>
      <li key={person.name} className="results__item">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
        />
        <p className="name__text">
          &#10066; Person name: <span className="name__item">{person.name}</span>
        </p>
        <p className="params__text">
          <span className="params__item">Height: {person.height}</span>
          <span className="params__item">Mass: {person.mass}</span>
          <span className="params__item">Birth Year: {person.birth_year}</span>
        </p>
      </li>
    </Link>
  );
};
