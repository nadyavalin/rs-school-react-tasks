import { useState } from "react";
import { Person } from "./person";
import { PeopleResponse } from "../../../types/types";
import { useAppSelector } from "../../../hooks/hooks";
import { Flyout } from "./flyout/flyout";

export const PeopleList = ({ people }: { people: PeopleResponse["results"] }) => {
  const selectedItems = useAppSelector((state) => state.people.selectedItems);
  console.log();

  const [isError, setIsError] = useState(false);
  const triggerError = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("An error has occurred");
  }

  return (
    <>
      {people && people.length > 0 ? (
        <ul className="results">
          {people.map((person) => (
            <Person
              key={person.name}
              person={person}
              isSelected={selectedItems.includes(person.name)}
            />
          ))}
        </ul>
      ) : (
        <p>The list is empty</p>
      )}
      <Flyout people={people} />
      <button className="trigger-error-button" onClick={triggerError}>
        Trigger Error
      </button>
    </>
  );
};
