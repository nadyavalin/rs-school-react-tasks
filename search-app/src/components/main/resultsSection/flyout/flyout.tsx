import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { selectItem } from "../../../../store/peopleSlice";
import { PeopleResponse } from "../../../../types/types";

export const Flyout = ({ people }: { people: PeopleResponse["results"] }) => {
  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector((state) => state.people.selectedItems);

  if (selectedItems.length === 0) {
    return null;
  }

  const handleUnselectAll = () => {
    dispatch(selectItem({ itemId: "all" }));
  };

  const handleDownload = () => {
    const selectedPeopleData = selectedItems
      .map((itemId) => {
        const item = people.find((person) => person.name === itemId);

        if (!item) {
          return null;
        }

        return [
          item.name,
          item.birth_year,
          item.eye_color,
          item.gender,
          item.hair_color,
          item.height,
          item.mass,
          item.skin_color,
          item.created,
          item.edited,
        ];
      })
      .filter(Boolean);

    const csv = selectedPeopleData.map((row) => row?.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;
    link.download = `${selectedItems.length}_people.csv`;
    link.click();
  };

  return (
    <div className="flyout">
      <p>You have selected {selectedItems.length} items.</p>
      <div className="flyout__buttons">
        <button onClick={handleUnselectAll}>Unselect All</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};
