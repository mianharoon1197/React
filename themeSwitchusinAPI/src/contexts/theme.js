import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light', // Default theme
    darkTheme: () => {}, // Function to set dark theme
    lightTheme: () => {}, // Function to set light theme
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}