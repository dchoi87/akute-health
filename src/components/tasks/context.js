import React, { createContext, useContext, useReducer, useMemo } from "react";
import useCombinedReducers from "use-combined-reducers";

import { tasks, settings } from "./reducers";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({
    tasks: useReducer(tasks.reducer, tasks.state),
    settings: useReducer(settings.reducer, settings.state),
  });
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
