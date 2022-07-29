import React from "react";
import classNames from "classnames";

import Overview from "./overview";
import Filters from "./filters";
import Priority from "./priority";
import Owner from "./owner";
import Status from "./status";
import Tags from "./tags";

import { useFiltersContext } from "../context/filters";

import styles from "./index.module.css";

const SideBar = ({ sidebar }) => {
  const [, dispatch] = useFiltersContext();
  return (
    <div
      className={classNames(styles.container, {
        [styles.open]: sidebar,
      })}
    >
      <Overview dispatch={dispatch} />
      <Filters dispatch={dispatch} />
      <Priority dispatch={dispatch} />
      <Owner dispatch={dispatch} />
      <Status dispatch={dispatch} />
      <Tags dispatch={dispatch} />
    </div>
  );
};

export default SideBar;
