export const tasks = {
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
