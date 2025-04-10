import { createContext, useReducer, useEffect } from "react";

export const themeContext = createContext();

// Safe localStorage parsing with error handling
const getInitialState = () => {
  try {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  } catch {
    return false;
  }
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: getInitialState() });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};