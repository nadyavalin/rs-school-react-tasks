import "./styles.css";
import { IPerson } from "../../../types/types";

export const Person = ({ person }: { person: IPerson }) => {
  return (
    <li className="results_item">
      <p className="name__text">
        &#10066; Person name: <span className="name__item">{person.name}</span>
      </p>
      <p className="params__text">
        <span className="params__item">Height: {person.height}</span>
        <span className="params__item">Mass: {person.mass}</span>
        <span className="params__item">Birth Year: {person.birth_year}</span>
      </p>
    </li>
  );
};
