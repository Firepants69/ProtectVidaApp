import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { useColorScheme } from "react-native";

const lightTheme = {
  background: "#F1F7FF",
  text: "#000000",
  cardindex:"white",
  primary: "#6200ee",
  subtitlecard:"#6B7280",
  textInputPlaceHolder:"#64748B",
  textInputBorder:"#E2E8F0"
};

const darkTheme = {
  background: "#000",
  text: "#ffffff",
  cardindex:"#141f27",
  primary: "#bb86fc",
  subtitlecard:"#A1ADB0",
  textInputPlaceHolder:"gray",
  textInputBorder:"#A1ADB0"
};

type Theme = {
  cardindex:string;
  background: string;
  text: string;
  primary: string;
  subtitlecard:string,
  textInputPlaceHolder:string,
  textInputBorder:string
};

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  isDark: false,
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const scheme = useColorScheme();
  const [isDark, setIsDark] = useState<boolean>(scheme === "dark");

  useEffect(()=>{
    setIsDark(scheme === "dark");
  },
  [scheme]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);