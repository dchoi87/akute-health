import React, { useEffect } from "react";

import SideBar from "./sidebar";
import Content from "./content";

import { useTasks } from "./context";
import { getTasks } from "./actions";

import styles from "./index.module.css";

const Tasks = () => {
  const [state, dispatch] = useTasks();

  useEffect(() => {
    getTasks(dispatch);
  }, []);

  return (
    <div className={styles.container}>
      <SideBar />
      <Content />
    </div>
  );
};

export default Tasks;
