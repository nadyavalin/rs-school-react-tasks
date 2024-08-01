import styles from "./styles.module.css";
import { useState } from "react";

export const TriggerButton = () => {
  const [isError, setIsError] = useState(false);
  const triggerError = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("An error has occurred");
  }

  return (
    <button className={styles.triggerErrorButton} onClick={triggerError}>
      Trigger Error
    </button>
  );
};
