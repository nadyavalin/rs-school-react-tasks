import { useState } from "react";
import { Person } from "./person";
import { PeopleResponse } from "../../../types/types";
// import { useDispatch } from "react-redux";
// import { selectItem } from "../../../store/peopleSlice";
// import { useAppSelector } from "../../../hooks/hooks";

export const PeopleList = ({ people }: { people: PeopleResponse["results"] }) => {
  // const dispatch = useDispatch();
  // const selectedItems = useAppSelector((state) => state.people.selectedItems);

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
            <Person
              key={person.name}
              person={person}
              // isSelected={selectedItems.includes(person.name)}
              // onSelectionChange={(checked) => dispatch(selectItem({ itemId: person.name }))}
            />
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
