import React from "react";
import classNames from "classnames";
import { ArrowDownShort, ArrowUpShort } from "react-bootstrap-icons";

import Checkbox from "../common/checkbox";
import Row from "./row";

import { useWindowHeight } from "../hooks/useResize";
import { useSort } from "../hooks/useSort";
import { useFiltersContext } from "../context/filters";
import { useTasksContext } from "../context/tasks";

import styles from "./index.module.css";

const Table = ({ tasks, limit }) => {
  const [, dispatch_f] = useFiltersContext();
  const [{ selected }, dispatch_t] = useTasksContext();
  const [sort, handleSort] = useSort(dispatch_f);
  const tableHeight = useWindowHeight() - 147 - (selected.length ? 62 : 0);

  const handleClick = ({ target }) => {
    const id = target.dataset.id;
    const type = id === "all" ? "SELECT_ALL" : "SELECT_TASK";
    const payload = id === "all" ? tasks : id;
    dispatch_t({ type, payload });
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
                [styles.selected]: sort.type === "priority",
              })}
              data-id="priority"
              onClick={() => handleSort("priority")}
            >
              <span>Priority</span>
              {sort.type === "priority" &&
                (sort.order === "desc" ? <ArrowDownShort /> : <ArrowUpShort />)}
            </th>
            <th>
              <span>Owner</span>
            </th>
            <th
              className={classNames(styles.sort, {
                [styles.selected]: sort.type === "dueDate",
              })}
              data-id="dueDate"
              onClick={() => handleSort("dueDate")}
            >
              <span>Due Date</span>
              {sort.type === "dueDate" &&
                (sort.order === "desc" ? <ArrowDownShort /> : <ArrowUpShort />)}
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
