import { useState } from "react";
import { IPerson } from "../../../types/types";
import { Person } from "./person";

interface PeopleList {
  people: IPerson[];
}

export const PeopleList = ({ people }: PeopleList) => {
  const [isError, setIsError] = useState(false);
  const triggerError = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("An error has occurred");
  }

  return (
    <>
      <ul className="results">
        {people.map((person: IPerson) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
      <button className="trigger-error-button" onClick={triggerError}>
        Trigger Error
      </button>
    </>
  );
};
