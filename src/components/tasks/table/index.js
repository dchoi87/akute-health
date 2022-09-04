import React, { useState } from "react";
import classNames from "classnames";
import { ArrowDownShort, ArrowUpShort } from "react-bootstrap-icons";

import Checkbox from "../common/checkbox";
import Row from "./row";

import { useWindowHeight } from "../hooks/useResize";
import { useFiltersContext } from "../context/filters";

import styles from "./index.module.css";

const Table = ({ tasks, selectedItems, limit }) => {
  const [, dispatch] = useFiltersContext();
  const tableHeight = useWindowHeight() - 147 - (selectedItems.length ? 62 : 0);
  // NOTE: initial state: pull from context or custom hook so that we can unify logic
  const [sort, setSort] = useState({ priority: "desc" });
  const [type, setType] = useState("priority");

  const handleClick = ({ target }) => {
    const id = target.dataset.id;
    const type = id === "all" ? "SELECT_ALL" : "SELECT_TASK";
    const payload = id === "all" ? tasks : id;

    dispatch({ type, payload });
  };

  const handleSort = ({ currentTarget }) => {
    const target = currentTarget.dataset.id;
    let payload;

    if (type === target) {
      // set order
      const order = sort[target] === "asc" ? "desc" : "asc";
      payload = { ...sort, [target]: order };
    } else {
      // change type & order
      payload = Object.assign({ [target]: sort[target] || "desc" }, sort);
      setType(target);
    }

    setSort(payload);
    dispatch({ type: "CHANGE_SORT", payload: payload });
  };

  return (
    <div className={styles.container} style={{ height: tableHeight }}>
      <table>
        <thead>
          <tr>
            <th className={styles.checkbox}>
              <Checkbox
                id="row-all"
                label=""
                dataId="all"
                onChange={handleClick}
                checked={selectedItems.length === limit}
              />
            </th>
            <th className={styles.title}>
              <span>Task</span>
            </th>
            <th
              className={classNames(styles.sort, {
                [styles.selected]: type === "priority",
              })}
              data-id="priority"
              onClick={handleSort}
            >
              <span>Priority</span>
              {type === "priority" &&
                (sort["priority"] === "desc" ? (
                  <ArrowDownShort />
                ) : (
                  <ArrowUpShort />
                ))}
            </th>
            <th>
              <span>Owner</span>
            </th>
            <th
              className={classNames(styles.sort, {
                [styles.selected]: type === "dueDate",
              })}
              data-id="dueDate"
              onClick={handleSort}
            >
              <span>Due Date</span>
              {type === "dueDate" &&
                (!sort["dueDate"] || sort["dueDate"] === "desc" ? (
                  <ArrowDownShort />
                ) : (
                  <ArrowUpShort />
                ))}
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
          {tasks &&
            tasks.data.map((item, i) => {
              return (
                <Row
                  key={i}
                  idx={i}
                  item={item}
                  isSelected={selectedItems.includes(item.id)}
                  handleClick={handleClick}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
