import { Component } from "react";
import "./styles.css";
import { PeopleItem } from "../../../types/types";
import { Person } from "./person";

interface PeopleListProps {
  people: PeopleItem[];
}

export class PeopleList extends Component<PeopleListProps> {
  render() {
    const { people: people } = this.props;
    return (
      <ul className="results">
        {people.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    );
  }
}
