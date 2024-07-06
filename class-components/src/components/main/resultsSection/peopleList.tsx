import { Component } from "react";
import { Person } from "./person";
import { IPerson } from "../../../types/types";

interface PeopleListProps {
  people: IPerson[];
}

interface PeopleListState {
  isError: boolean;
}

export class PeopleList extends Component<PeopleListProps, PeopleListState> {
  constructor(props: PeopleListProps) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  triggerError = () => {
    this.setState({ isError: true });
  };

  render() {
    const { isError } = this.state;
    const { people } = this.props;

    if (isError) {
      throw new Error("An error occurred");
    }

    return (
      <>
        <ul className="results">
          {people.map((person: IPerson) => (
            <Person key={person.name} person={person} />
          ))}
        </ul>
        <button className="trigger-error-button" onClick={this.triggerError}>
          Trigger Error
        </button>
      </>
    );
  }
}
