import { useState } from "react";
import { IPerson } from "../../../types/types";
import { Person } from "./person";

interface PeopleList {
  persons?: IPerson[];
}

export const PeopleList = ({ persons }: PeopleList) => {
  const [isError, setIsError] = useState(false);
  const triggerError = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("An error has occurred");
  }

  return (
    <>
      {persons && persons.length > 0 ? (
        <ul className="results">
          {persons.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </ul>
      ) : (
        <p>The list is empty</p>
      )}
      <button className="trigger-error-button" onClick={triggerError}>
        Trigger Error
      </button>
    </>
  );
};
