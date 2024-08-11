import React from "react";
import styles from "./styles.module.css";
import { useTheme } from "./themeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={styles.toggleThemeButton}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
