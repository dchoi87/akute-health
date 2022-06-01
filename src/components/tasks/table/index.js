import React from "react";
import classNames from "classnames";
import {
  CaretDownFill,
  CircleFill,
  ExclamationTriangleFill,
} from "react-bootstrap-icons";
import Checkbox from "../common/checkbox";
import { useWindowHeight } from "../hooks";

import styles from "./index.module.css";

const Row = ({ item, idx, isSelected, handleSelectItem }) => {
  const isPastDue = item.duedate === "03-25-22";

  return (
    <tr
      className={classNames(styles[item.priority], {
        [styles.selected]: isSelected,
      })}
    >
      <td className={styles.checkbox}>
        <Checkbox
          id={`row-${idx + 1}`}
          dataId={item.id}
          label=""
          onChange={handleSelectItem}
          checked={isSelected}
        />
      </td>
      <td className={styles.title}>{item.title}</td>
      <td className={classNames(styles.priority)}>
        <CircleFill />
        <span>{item.priority}</span>
      </td>
      <td className={styles.owner}>{item.owner}</td>
      <td
        className={classNames(styles.duedate, { [styles.pastDue]: isPastDue })}
      >
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
      <td className={styles.state}>{item.state}</td>
    </tr>
  );
};

const Table = ({ data, selectedItems, handleSelectItem }) => {
  const tableHeight = useWindowHeight() - 147 - (selectedItems.length ? 62 : 0);

  return (
    <div className={styles.container} style={{ height: tableHeight }}>
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
              <span>Owner</span>
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
              <span>State</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <Row
                key={i}
                idx={i}
                item={item}
                isSelected={selectedItems.includes(item.id)}
                handleSelectItem={handleSelectItem}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
