import { mockData } from "./data";

const getMockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
};

export const getTasks = async (dispatch) => {
  try {
    const tasks = await getMockData();
    dispatch({ type: "fetch", tasks });
  } catch (error) {
    dispatch({ type: "error", error });
  }
};
