import React from "react";
import classNames from "classnames";
import { ArrowDownShort, ArrowUpShort } from "react-bootstrap-icons";

import Checkbox from "../common/checkbox";
import Row from "./row";

import { useWindowHeight } from "../hooks/useResize";
import { useFiltersContext } from "../context/filters";
import { useTasksContext } from "../context/tasks";

import styles from "./index.module.css";

const Table = ({ tasks, limit }) => {
  const [, filtersDispatch] = useFiltersContext();
  const [{ selected, sort, type }, tasksDispatch] = useTasksContext();
  const tableHeight = useWindowHeight() - 147 - (selected.length ? 62 : 0);

  const handleClick = ({ target }) => {
    const id = target.dataset.id;
    const type = id === "all" ? "SELECT_ALL" : "SELECT_TASK";
    const payload = id === "all" ? tasks : id;
    tasksDispatch({ type, payload });
  };

  const handleSort = ({ currentTarget }) => {
    const target = currentTarget.dataset.id;
    let payload;

    if (type === target) {
      // set order
      const order = sort[type] === "asc" ? "desc" : "asc";
      payload = { ...sort, [type]: order };
    } else {
      // change type & order
      payload = Object.assign({ [target]: sort[target] || "desc" }, sort);
      tasksDispatch({ type: "SET_SORT_TYPE", payload: target });
    }

    tasksDispatch({ type: "SET_SORT_OBJECT", payload: payload });
    filtersDispatch({ type: "CHANGE_SORT", payload: payload });
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
                checked={selected.length === limit}
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
                  isSelected={selected.includes(item.id)}
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
