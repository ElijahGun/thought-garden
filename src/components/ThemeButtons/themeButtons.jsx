import "./themeButtons.scss";
import { useTheme } from "../../hooks/useTheme";
import modeIcon from '../../assets/mode-icon.svg';

const themes = ["#4baa4b", "#BADA55", "#2C25A2"];

export const ThemeButtons = () => {
  const { changeColor, changeMode, mode } = useTheme();

  console.log(mode)

  return (
    <div className="theme-buttons">
    <div className="mode-icon-box">
      <img
      className={`mode-icon ${mode}`}
        src={modeIcon}
        alt='mode icon'
        onClick={()=> mode === 'light' ? changeMode('dark') : changeMode('light')}
      />
    </div>
      {themes.map((theme, i) => (
        <div
          className={`theme-btn theme-btn-${i}`}
          key={theme}
          style={{ background: theme }}
          onClick={() => changeColor(theme)}
        />
      ))}
    </div>
  );
};
