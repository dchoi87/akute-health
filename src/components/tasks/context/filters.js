import React, { createContext, useContext, useReducer, useMemo } from "react";

import { addRemoveFromArray } from "../helpers";

const FiltersContext = createContext();

const filters = {
  state: { priority: [], ownerId: [], status: [], tags: [] },
  reducer: function (state, action) {
    switch (action.type) {
      case "FILTER_PRIORITY": {
        const value = addRemoveFromArray(state.priority, action.payload);
        return { ...state, priority: value };
      }
      case "FILTER_OWNER": {
        const value = addRemoveFromArray(state.ownerId, action.payload);
        return { ...state, ownerId: value };
      }
      case "FILTER_STATUS": {
        const value = addRemoveFromArray(state.status, action.payload);
        return { ...state, status: value };
      }
      case "FILTER_TAGS": {
        const value = addRemoveFromArray(state.tags, action.payload);
        return { ...state, tags: value };
      }
      default: {
        return state;
      }
    }
  },
};

const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filters.reducer, filters.state);
  const value = useMemo(() => [state, dispatch], [state]);
  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};

const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("useFiltersContext must be used within a FiltersProvider");
  }
  return context;
};

export { FiltersProvider, useFiltersContext };
