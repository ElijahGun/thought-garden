import "./themeButtons.scss";
import { useTheme } from "../../hooks/useTheme";

const themes = ["#4baa4b", "#BADA55", "#2C25A2"];

export const ThemeButtons = () => {
  const { changeColor } = useTheme();

  return (
    <div className="theme-buttons">
      {themes.map((theme) => (
        <div
          className="theme-btn"
          key={theme}
          style={{ background: theme }}
          onClick={() => changeColor(theme)}
        />
      ))}
    </div>
  );
};
