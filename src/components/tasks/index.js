import React, { useState } from "react";

import SideBar from "./sidebar";
import Content from "./content";

import { TasksProvider } from "./context/tasks";

import styles from "./index.module.css";

const Tasks = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className={styles.container}>
      <SideBar sidebar={sidebar} />
      <TasksProvider>
        <Content sidebar={sidebar} setSidebar={setSidebar} />
      </TasksProvider>
    </div>
  );
};

export default Tasks;
