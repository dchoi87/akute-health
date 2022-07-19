import React, { createContext, useContext, useReducer, useMemo } from "react";

const GlobalContext = createContext();

const global = {
  state: { tasks: [], patients: {}, owners: {}, error: null },
  reducer: function (state, action) {
    switch (action.type) {
      case "GET_TASKS": {
        return { ...state, tasks: action.payload };
      }
      case "GET_PATIENTS": {
        return { ...state, patients: action.payload };
      }
      case "GET_OWNERS": {
        return { ...state, owners: action.payload };
      }
      case "SHOW_ERROR": {
        return { ...state, error: action.payload };
      }
      default: {
        return state;
      }
    }
  },
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(global.reducer, global.state);
  const value = useMemo(() => [state, dispatch], [state]);
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};

export { GlobalProvider, useGlobal };
