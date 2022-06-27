import React, { createContext, useContext, useReducer, useMemo } from "react";

const TasksContext = createContext();

const tasks = {
  state: { data: [], selected: [], error: "" },
  reducer: function (state, action) {
    switch (action.type) {
      case "FETCH_DATA": {
        return { ...state, data: action.payload };
      }
      case "SELECT_TASK": {
        const selectedTasks = state.selected.includes(action.task)
          ? state.selected.filter((task) => task !== action.task)
          : [...state.selected, action.task];

        return { ...state, selected: selectedTasks };
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

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasks.reducer, tasks.state);
  const value = useMemo(() => [state, dispatch], [state]);
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

export { TasksProvider, useTasks };
