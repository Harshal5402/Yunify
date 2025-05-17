import React, { useEffect, useState } from 'react';
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="theme-toggle-btn" onClick={toggleTheme}>
      {darkMode ? (
        <i className="fa-solid fa-sun"></i> // Sun icon for Dark Mode
      ) : (
        <i className="fa-solid fa-moon"></i> // Moon icon for Light Mode
      )}
    </div>
  );
};

export default ThemeToggle;
