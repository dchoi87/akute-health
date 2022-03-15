import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";
// note: will probably have to develop custom dropdown
// due to lack of styling available for default select

// make this into dynamic component

const Select = ({}) => {
  return (
    <div className={styles.container}>
      <label htmlFor="sort-select">Sort</label>
      <select name="sort" id="sort-select">
        <option value="priority">Sort by Priority</option>
        <option value="date">Sort by Due Date</option>
      </select>
    </div>
  );
};

export default Select;
