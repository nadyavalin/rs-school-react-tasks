import { useEffect, useState } from "react";
import { IPerson } from "../../../../types/types";
import styles from "./styles.module.css";

interface FlyoutProps {
  initialSelectedItems: IPerson[];
}

export const Flyout = ({ initialSelectedItems }: FlyoutProps) => {
  const [selectedItems, setSelectedItems] = useState<IPerson[]>(initialSelectedItems || []);

  useEffect(() => {
    if (initialSelectedItems && Array.isArray(initialSelectedItems)) {
      setSelectedItems(initialSelectedItems);
    }
  }, [initialSelectedItems]);

  const handleUnselectAll = () => {
    setSelectedItems([]);
  };

  const handleDownload = () => {
    const csv = selectedItems.map((row) => Object.values(row).join(",")).join("\n");
    const link = document.createElement("a");
    link.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;
    link.download = `${selectedItems.length}_people.csv`;
    link.click();
  };

  if (selectedItems.length === 0) {
    return null;
  }

  return (
    <div className={styles.flyout}>
      <p>You have selected {selectedItems.length} items.</p>
      <div className={styles.flyoutButtons}>
        <button onClick={handleUnselectAll}>Unselect All</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};
