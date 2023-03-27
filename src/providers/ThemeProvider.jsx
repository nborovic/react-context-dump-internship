import { createContext, useContext, useEffect, useState } from "react";

const defaultContext = {
  isDarkMode: false,
  toggleMode: () => {},
};

export const ThemeContext = createContext(defaultContext);

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultContext.isDarkMode);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.setProperty("--background-color", "#111111");
    } else {
      document.body.style.setProperty("--background-color", "#ffffff");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
