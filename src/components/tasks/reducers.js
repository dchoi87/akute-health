export const tasks = {
  state: { data: [] },
  reducer: function (state, action) {
    switch (action.type) {
      case "fetch": {
        return { ...state, data: action.tasks };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  },
};
