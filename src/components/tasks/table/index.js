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
                <td>
                  <Square />
                </td>
                <td>{item.title}</td>
                <td>{item.priority}</td>
                <td>{item.duedate}</td>
                <td>{item.patient}</td>
                <td>Tags</td>
                <td>{item.owner}</td>
                <td>{item.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
