"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeContextType {
  isRedesign: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isRedesign: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isRedesign, setIsRedesign] = useState(false);

  const toggleTheme = () => setIsRedesign((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isRedesign, toggleTheme }}>
      <div className={isRedesign ? "theme-redesign" : "theme-original"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
