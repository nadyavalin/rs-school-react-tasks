import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../utils/themeUtils";

export const ThemeToggle = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.toggleThemeButton}>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
};
