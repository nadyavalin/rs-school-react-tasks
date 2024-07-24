import "./styles.css";
import { IPerson } from "../../../types/types";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const Person = ({
  person,
  isSelected,
  onSelectionChange,
}: {
  person: IPerson;
  isSelected: boolean;
  onSelectionChange: (checked: boolean) => void;
}) => {
  const [isChecked, setIsChecked] = useState(isSelected);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    onSelectionChange(newChecked);
  };

  const location = useLocation();
  return (
    <Link key={`${person.name}`} to={`/${person.name}${location.search}`}>
      <li key={person.name} className="results__item">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
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
