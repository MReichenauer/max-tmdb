import React, { ReactNode, useEffect, useState } from "react";

type ThemeType = "light" | "dark";
type ThemeContextType = { theme: ThemeType; toggleTheme: () => void };

const darkColor = "#121212";
const lightColor = "#FFFFFF";

export const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const lastUsedTheme = localStorage.getItem("theme") as ThemeType;
  const [theme, setTheme] = useState<ThemeType>(lastUsedTheme || "light");

  const toggleTheme = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };

  useEffect(() => {
    const mainContainer = document.getElementById("app");
    if (mainContainer) {
      const color = theme === "light" ? darkColor : lightColor;
      const backgroundColor = theme === "light" ? lightColor : darkColor;

      mainContainer.style.color = color;
      mainContainer.style.backgroundColor = backgroundColor;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
