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
  const [filters, dispatch_f] = useFiltersContext();

  return (
    <div
      className={classNames(styles.container, {
        [styles.open]: sidebar,
      })}
    >
      <Presets filters={filters} dispatch_f={dispatch_f} />
      <Priority filters={filters} dispatch_f={dispatch_f} />
      <Owner filters={filters} dispatch_f={dispatch_f} />
      <Status filters={filters} dispatch_f={dispatch_f} />
      <Tags filters={filters} dispatch_f={dispatch_f} />
    </div>
  );
};

export default SideBar;
