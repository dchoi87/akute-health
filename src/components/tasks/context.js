import React, { createContext, useContext, useReducer } from "react";
import useCombinedReducers from "use-combined-reducers";

import { tasks } from "./reducers";

const TasksContext = createContext();

function TasksProvider({ children }) {
  const [state, dispatch] = useCombinedReducers({
    tasks: useReducer(tasks.reducer, tasks.state),
  });
  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
}

export { TasksProvider, useTasks };
