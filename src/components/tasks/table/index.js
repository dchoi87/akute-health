import React from "react";
import classNames from "classnames";
import { Square, CaretDownFill } from "react-bootstrap-icons";

import styles from "./index.module.css";

const Table = ({ data }) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th className={styles.checkbox}>
              <Square />
            </th>
            <th className={styles.title}>
              <span>Task</span>
            </th>
            <th>
              <span>Priority</span>
              <CaretDownFill />
            </th>
            <th>
              <span>Due Date</span>
              <CaretDownFill />
            </th>
            <th>
              <span>Patient</span>
            </th>
            <th>
              <span>Tags</span>
            </th>
            <th>
              <span>Owner</span>
            </th>
            <th>
              <span>Appointed State</span>
            </th>
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
                <td className={styles.priority}>
                  <div
                    className={classNames(styles.pill, styles[item.priority])}
                  >
                    {item.priority}
                  </div>
                </td>
                <td className={styles.duedate}>{item.duedate}</td>
                <td className={styles.patient}>{item.patient}</td>
                <td className={styles.tags}>
                  {item.tags.slice(0, 2).map((tag, i) => {
                    return (
                      <div key={i} className={styles.tag}>
                        {tag}
                      </div>
                    );
                  })}
                  {item.tags.length > 4 && (
                    <div className={styles.tag}>+{item.tags.length - 2}</div>
                  )}
                </td>
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
