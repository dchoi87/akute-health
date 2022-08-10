import React, { createContext, useContext, useReducer, useMemo } from "react";

import { addRemoveFromArray } from "../helpers";

const FiltersContext = createContext();

const filters = {
  state: {
    preset: { value: "complete", action: "$ne" },
    priority: { value: [], action: "$in" },
    ownerId: { value: [], action: null },
    status: { value: [], action: "$in" },
    tags: { value: [], action: "$in" },
    dueDate: { value: "", action: "$lte" },
    page: 0,
    limit: 10,
    sort: [{ priority: "desc" }],
  },
  reducer: function (state, action) {
    switch (action.type) {
      case "FILTER_PRIORITY": {
        const value = addRemoveFromArray(state.priority.value, action.payload);
        return { ...state, priority: { ...state.priority, value } };
      }
      case "FILTER_OWNER": {
        const value = addRemoveFromArray(state.ownerId.value, action.payload);
        return { ...state, ownerId: { ...state.ownerId, value } };
      }
      case "FILTER_STATUS": {
        const value = addRemoveFromArray(state.status.value, action.payload);
        return { ...state, status: { ...state.status, value } };
      }
      case "FILTER_TAGS": {
        const value = addRemoveFromArray(state.tags.value, action.payload);
        return { ...state, tags: { ...state.tags, value } };
      }
      case "FILTER_DATES": {
        return {
          ...state,
          dueDate: { ...state.dueDate, value: action.payload },
        };
      }
      case "FILTER_PRESET": {
        return {
          ...state,
          preset: { ...state.preset, action: action.payload },
        };
      }
      case "CHANGE_PAGE": {
        return { ...state, page: action.payload };
      }
      case "CHANGE_LIMIT": {
        return { ...state, limit: action.payload };
      }
      case "CHANGE_SORT": {
        return { ...state, sort: [action.payload] };
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
