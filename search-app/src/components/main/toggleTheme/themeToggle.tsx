"use client";

import styles from "./styles.module.css";
import { toggleTheme } from "../../../utils/themeUtils";

export const ThemeToggle = () => {
  return (
    <div className={styles.toggleThemeButton}>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </div>
  );
};
