import "./styles.css";
import { IPerson } from "../../../types/types";
import { Link } from "react-router-dom";

export const Person = ({ person }: { person: IPerson }) => {
  return (
    <Link key={`${person.name}`} to={`/${person.name}${location.search}`}>
      <li key={person.name} className="results_item">
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
