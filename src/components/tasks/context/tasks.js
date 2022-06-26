import React, { createContext, useContext, useReducer, useMemo } from "react";
import useCombinedReducers from "use-combined-reducers";

const TasksContext = createContext();

const tasks = {
  state: { data: [], selected: [] },
  reducer: function (state, action) {
    switch (action.type) {
      case "fetch": {
        return { ...state, data: action.tasks };
      }
      case "select": {
        const selectedTasks = state.selected.includes(action.task)
          ? state.selected.filter((task) => task !== action.task)
          : [...state.selected, action.task];

        return { ...state, selected: selectedTasks };
      }
      default: {
        return state;
      }
    }
  },
};

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({
    tasks: useReducer(tasks.reducer, tasks.state),
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
