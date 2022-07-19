import React, { useState, useEffect } from "react";

import SideBar from "./sidebar";
import Content from "./content";

import { TasksProvider } from "./context/tasks";
import { useGlobal } from "./context/global";
import { getData } from "./actions";

import styles from "./index.module.css";

const Tasks = () => {
  const [state, dispatch] = useGlobal();
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    console.log("fetching data...");
    getData(dispatch);
  }, []);

  return (
    <div className={styles.container}>
      <SideBar sidebar={sidebar} />
      <TasksProvider>
        <Content
          tasks={state.tasks}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
      </TasksProvider>
    </div>
  );
};

export default Tasks;
