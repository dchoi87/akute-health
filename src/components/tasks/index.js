import React, { useState, useEffect } from "react";

import SideBar from "./sidebar";
import Content from "./content";

import { useTasks } from "./context";
import { getTasks } from "./actions";

import styles from "./index.module.css";

const Tasks = () => {
  const [, dispatch] = useTasks();
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    console.log("fetching data...");
    getTasks(dispatch);
  }, []);

  return (
    <div className={styles.container}>
      <SideBar sidebar={sidebar} />
      <Content sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
};

export default Tasks;
