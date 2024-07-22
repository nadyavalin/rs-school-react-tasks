import { useState } from "react";
import { Person } from "./person";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const PeopleList = () => {
  const [isError, setIsError] = useState(false);
  const triggerError = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("An error has occurred");
  }

  const people = useSelector((state: RootState) => state.state.peopleResponse);

  return (
    <>
      {people.results.length > 0 ? (
        <ul className="results">
          {people.results.map((person) => (
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
