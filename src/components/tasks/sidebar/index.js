import React from "react";
import classNames from "classnames";

import Overview from "./overview";
import Filters from "./filters";
import Priority from "./priority";
import Owner from "./owner";
import Status from "./status";
import Tags from "./tags";

import styles from "./index.module.css";

const SideBar = ({ isOpen }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.open]: isOpen,
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
