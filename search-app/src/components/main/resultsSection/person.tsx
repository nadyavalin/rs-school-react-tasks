import "./styles.css";
import { IPerson } from "../../../types/types";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hooks";
import { selectItem } from "../../../store/peopleSlice";
import { useCallback } from "react";

export const Person = ({ person, isSelected }: { person: IPerson; isSelected: boolean }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleCheckboxChange = useCallback(() => {
    dispatch(selectItem({ itemId: person.name }));
  }, [dispatch, person.name]);

  return (
    <Link key={`${person.name}`} to={`/${person.name}${location.search}`}>
      <li key={person.name} className="results__item">
        <input type="checkbox" checked={isSelected} onChange={handleCheckboxChange} />
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
