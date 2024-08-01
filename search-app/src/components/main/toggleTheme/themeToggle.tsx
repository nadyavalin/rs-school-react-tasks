import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../utils/themeUtils";

export const ThemeToggle = () => {
  const dispatch = useDispatch();

  return (
    <div className="toggle-theme__button">
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
};
