import React from "react";
import classNames from "classnames";
import { Square } from "react-bootstrap-icons";

import styles from "./index.module.css";

const Table = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={classNames(styles.row, styles.heading)}>
          <div className={styles.column}></div>
          <div className={styles.column}>Task</div>
          <div className={styles.column}>Priority</div>
          <div className={styles.column}>Due Date</div>
          <div className={styles.column}>Patient</div>
        </div>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.row}>
              <div className={classNames(styles.column, styles.checkbox)}>
                <Square />
              </div>
              <div className={styles.column}>{item.title}</div>
              <div className={styles.column}>{item.priority}</div>
              <div className={styles.column}>{item.duedate}</div>
              <div className={styles.column}>{item.patient}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
