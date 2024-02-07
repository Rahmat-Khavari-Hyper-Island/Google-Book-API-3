import { createContext, useEffect, useState } from 'react';
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const bgColorClass = darkMode ? 'bg-dark' : 'bg-light';

  useEffect(() => {
    if (window.matchMedia) {
      let darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

      if (darkThemeQuery.matches) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, []);

  const darkModeHandle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, darkModeHandle, bgColorClass }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
