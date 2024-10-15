"use client";

// components/ThemeProvider.js
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a Context for the theme
const ThemeContext = createContext();

// Create the ThemeProvider component
const ThemeProvider = ({ children }) => {
  let savedTheme = "";
  const [theme, setTheme] = useState(savedTheme ?? "");

  useEffect(() => {
    // Check local storage for saved theme
    savedTheme = localStorage.getItem("website-theme");
    setTheme(savedTheme ?? "");
    if (typeof window !== "undefined")
      setTheme(localStorage.getItem("website-theme"));
  }, []);

  // Change theme and update localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("website-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={theme === "light" ? "light" : theme === "dark" ? "dark" : ""}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
