import React from "react";
import classNames from "classnames";
import { CircleFill, ExclamationTriangleFill } from "react-bootstrap-icons";

import Checkbox from "../../common/checkbox";

import styles from "./index.module.css";

const Row = ({ item, idx, isSelected, handleClick }) => {
  const isPastDue = item.duedate === "03-25-22";

  return (
    <tr
      className={classNames(styles.row, styles[item.priority], {
        [styles.selected]: isSelected,
      })}
    >
      <td className={styles.checkbox}>
        <Checkbox
          id={`row-${idx}`}
          dataId={item.id}
          onChange={handleClick}
          checked={isSelected}
        />
      </td>
      <td className={styles.title}>{item.title}</td>
      <td className={styles.priority}>
        <CircleFill />
        <span>
          {item.priority === "p1" ? "urgent" : item.priority || "no priority"}
        </span>
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
        {item.tags &&
          item.tags.slice(0, 2).map((tag, i) => {
            return (
              <div key={i} className={styles.tag}>
                {tag}
              </div>
            );
          })}
        {item.tags && item.tags.length > 4 && (
          <div className={styles.tag}>+{item.tags.length - 2}</div>
        )}
      </td>
      <td className={styles.state}>{item.state}</td>
    </tr>
  );
};

export default Row;
