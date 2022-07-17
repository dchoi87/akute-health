import React, { createContext, useContext, useReducer, useMemo } from "react";

const TasksContext = createContext();

const tasks = {
  state: { selected: [] },
  reducer: function (state, action) {
    switch (action.type) {
      case "SELECT_TASK": {
        const isSelected = state.selected.includes(action.payload);
        const tasks = isSelected
          ? state.selected.filter((task) => task !== action.payload)
          : [...state.selected, action.payload];

        return { ...state, selected: tasks };
      }
      case "SELECT_ALL": {
        const isSelected = state.selected.length !== state.data.length;
        const tasks = isSelected ? state.data.map((task) => task.id) : [];

        return { ...state, selected: tasks };
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
