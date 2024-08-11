import React, { useState } from "react";
import styles from "./styles.module.css";
import { ErrorBoundary } from "./errorBoundary";

export const TriggerButton = () => {
  const [isError, setIsError] = useState(false);
  const triggerError = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("An error has occurred");
  }

  return (
    <ErrorBoundary>
      <button className={styles.triggerErrorButton} onClick={triggerError}>
        Trigger Error
      </button>
    </ErrorBoundary>
  );
};
