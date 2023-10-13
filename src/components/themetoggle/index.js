import React, { useContext } from "react";
import { WiMoonAltWaningCrescent4, WiDaySunny } from "react-icons/wi";
import ThemeContext from "./ThemeContext"; // import the context

const Themetoggle = () => {
  const { theme, setTheme } = useContext(ThemeContext); // use context

  const themetoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="nav_ac" onClick={themetoggle}>
      {theme === "dark" ? <WiDaySunny /> : <WiMoonAltWaningCrescent4 />}
    </div>
  );
};

export default Themetoggle;
