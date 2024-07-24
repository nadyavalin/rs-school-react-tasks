import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { selectItem } from "../../../store/peopleSlice";

export const Flyout = () => {
  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector((state) => state.people.selectedItems);

  if (selectedItems.length === 0) {
    return null;
  }

  const handleUnselectAll = () => {
    dispatch(selectItem({ itemId: "all" }));
  };

  const handleDownload = () => {
    console.log("Download button clicked!");
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
