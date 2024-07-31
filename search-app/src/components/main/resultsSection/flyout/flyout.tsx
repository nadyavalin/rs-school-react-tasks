import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { unselectAll } from "../../../../store/peopleSlice";

export const Flyout = () => {
  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector((state) => state.people.selectedItems);

  if (selectedItems.length === 0) {
    return null;
  }

  const handleUnselectAll = () => {
    dispatch(unselectAll());
  };

  const handleDownload = () => {
    const csv = selectedItems.map((row) => Object.values(row).join(",")).join("\n");
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
