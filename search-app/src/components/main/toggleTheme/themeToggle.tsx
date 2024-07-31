import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../utils/themeUtils";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isLightMode = useSelector((state: RootState) => state.theme.isLightMode);

  const rootElement = document.documentElement;
  if (isLightMode) {
    rootElement.classList.add("light");
    rootElement.classList.remove("dark");
  } else {
    rootElement.classList.add("dark");
    rootElement.classList.remove("light");
  }

  return (
    <div className="toggle-theme_button">
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
};
