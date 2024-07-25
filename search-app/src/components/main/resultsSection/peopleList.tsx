import { createContext, useState } from "react";
import { Person } from "./person";
import { PeopleResponse } from "../../../types/types";
import { useAppSelector } from "../../../hooks/hooks";
import { Flyout } from "./flyout/flyout";

export const PeopleContext = createContext<PeopleResponse["results"] | null>(null);

export const PeopleList = ({ people }: { people: PeopleResponse["results"] }) => {
  const selectedItems = useAppSelector((state) => state.people.selectedItems);

  const [isError, setIsError] = useState(false);
  const triggerError = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("An error has occurred");
  }

  return (
    <PeopleContext.Provider value={people}>
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
      <Flyout />
      <button className="trigger-error-button" onClick={triggerError}>
        Trigger Error
      </button>
    </PeopleContext.Provider>
  );
};
