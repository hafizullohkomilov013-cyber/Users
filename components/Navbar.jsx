import React from "react";
import "../src/index.css";

function Navbar({ darkMode, toggleTheme }) {
  return (
    <div className="navbar">
      <h1>USERS</h1>
      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}

export default Navbar;
