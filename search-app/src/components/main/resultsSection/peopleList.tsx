import { useState } from "react";
import { Person } from "./person";
import { PeopleResponse } from "../../../types/types";

export const PeopleList = ({ people }: { people: PeopleResponse["results"] }) => {
  const [isError, setIsError] = useState(false);
  const triggerError = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("An error has occurred");
  }

  return (
    <>
      {people.length > 0 ? (
        <ul className="results">
          {people.map((person) => (
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
