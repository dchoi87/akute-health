import React from "react";
import classNames from "classnames";
import {
  CaretDownFill,
  CircleFill,
  ExclamationTriangleFill,
} from "react-bootstrap-icons";
import Checkbox from "../common/checkbox";

import styles from "./index.module.css";

const Row = ({ item, idx }) => {
  const isPastDue = item.duedate === "03-25-22";
  return (
    <tr className={styles[item.priority]}>
      <td className={styles.checkbox}>
        <Checkbox id={`row-${idx + 1}`} label="" />
      </td>
      <td className={styles.title}>{item.title}</td>
      <td className={classNames(styles.priority)}>
        <CircleFill />
        <span>{item.priority}</span>
      </td>
      <td className={styles.duedate}>
        {isPastDue && <ExclamationTriangleFill />}
        {item.duedate}
      </td>
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
};

const Table = ({ data }) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th className={styles.checkbox}>
              <Checkbox id="row-all" label="" />
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
              <span>State</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return <Row key={i} idx={i} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
