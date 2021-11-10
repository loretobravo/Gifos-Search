import React from "react";
import "./App.css";

const Header = ({ isDark, setDark }) => {
  const handleChange = () => {
    setDark(!isDark);
  };
  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <div className="header-container">
        <img src="./Assets/logo-desktop.svg" alt="logo" className="gifos" />
        <button className="color-change" onClick={handleChange}>
          MODO {isDark ? "LIGHT" : "DARK"}
        </button>
      </div>
    </div>
  );
};

export default Header;
