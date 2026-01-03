import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
    <App />
);
