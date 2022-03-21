import React from "react";
import classNames from "classnames";
import { Square } from "react-bootstrap-icons";

import styles from "./index.module.css";

const Table = ({ data }) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Patient</th>
            <th>Tags</th>
            <th>Owner</th>
            <th>Appointed State</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td className={styles.checkbox}>
                  <Square />
                </td>
                <td className={styles.title}>{item.title}</td>
                <td className={styles.priority}>{item.priority}</td>
                <td className={styles.duedate}>{item.duedate}</td>
                <td className={styles.patient}>{item.patient}</td>
                <td className={styles.tags}>Tags</td>
                <td className={styles.owner}>{item.owner}</td>
                <td className={styles.state}>{item.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
