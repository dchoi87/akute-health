import React, { createContext, useContext, useReducer, useMemo } from "react";
import moment from "moment";

import { addRemoveFromArray } from "../helpers";

const FiltersContext = createContext();

const filters = {
  state: {
    priority: [],
    ownerId: [],
    status: ["not-started", "in-progress", ""],
    tags: [],
    dueDate: moment().format("YYYY-MM-DD"),
    page: 0,
    limit: 10,
    sort: [{ priority: "desc" }],
  },
  reducer: function (state, action) {
    switch (action.type) {
      case "FILTER_PRESETS": {
        const reset = {
          ...state,
          priority: [],
          ownerId: [],
          status:
            action.source === "dueDate"
              ? ["not-started", "in-progress", ""]
              : [],
          tags: [],
          dueDate: "",
        };

        if (action.source) {
          return { ...reset, [action.source]: action.payload };
        }

        return { ...reset, ...action.payload };
      }
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
      case "CHANGE_PAGE": {
        return { ...state, page: action.payload };
      }
      case "CHANGE_LIMIT": {
        return { ...state, limit: action.payload };
      }
      case "CHANGE_SORT": {
        const payload = Object.keys(action.payload).map((key) => {
          return { [key]: action.payload[key] };
        });
        return { ...state, sort: payload };
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
