import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const ThemeSwitcher = ({ children }) => {
  const { theme, toggleTheme, icon } = useDarkMode();

  return (
    <div className={`theme-${theme}`}>
      <div className="darkmodeDiv">
        <button className="darkModeButton" onClick={toggleTheme}>
          <span>{icon}</span>
        </button>
      </div>
      {children}
    </div>
  );
};

export default ThemeSwitcher;
