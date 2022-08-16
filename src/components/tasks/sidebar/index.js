import React from "react";
import classNames from "classnames";

import Presets from "./presets";
import Priority from "./priority";
import Owner from "./owner";
import Status from "./status";
import Tags from "./tags";

import { useFiltersContext } from "../context/filters";

import styles from "./index.module.css";

const SideBar = ({ sidebar }) => {
  const [filters, dispatch] = useFiltersContext();

  return (
    <div
      className={classNames(styles.container, {
        [styles.open]: sidebar,
      })}
    >
      <Presets filters={filters} dispatch={dispatch} />
      <Priority filters={filters} dispatch={dispatch} />
      <Owner filters={filters} dispatch={dispatch} />
      <Status filters={filters} dispatch={dispatch} />
      <Tags filters={filters} dispatch={dispatch} />
    </div>
  );
};

export default SideBar;
