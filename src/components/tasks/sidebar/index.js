import React from "react";
import classNames from "classnames";

import Overview from "./overview";
import Filters from "./filters";
import Priority from "./priority";
import Owner from "./owner";
import Status from "./status";
import Tags from "./tags";

import { useTasks } from "../context";

import styles from "./index.module.css";

const SideBar = () => {
  const [state, dispatch] = useTasks();
  return (
    <div
      className={classNames(styles.container, {
        [styles.open]: state.settings.sidebar,
      })}
    >
      <Overview />
      <Filters />
      <Priority />
      <Owner />
      <Status />
      <Tags />
    </div>
  );
};

export default SideBar;
