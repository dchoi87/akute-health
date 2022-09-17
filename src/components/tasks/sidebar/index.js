import React from "react";
import classNames from "classnames";

import Presets from "./presets";
import Priority from "./priority";
import Owner from "./owner";
import Status from "./status";
import Tags from "./tags";

import styles from "./index.module.css";

const SideBar = ({ sidebar }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.open]: sidebar,
      })}
    >
      <Presets />
      <Priority />
      <Owner />
      <Status />
      <Tags />
    </div>
  );
};

export default SideBar;
