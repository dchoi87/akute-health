import React from "react";

import Checkbox from "../common/checkbox";
import Row from "./row";
import TH from "./th";

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
            <TH className={styles.title} label="Task" />
            <TH
              className={styles.sort}
              label="Priority"
              type="priority"
              sort={sort}
              onClick={() => handleSort("priority")}
            />
            <TH label="Owner" />
            <TH
              className={styles.sort}
              label="Due Date"
              type="dueDate"
              sort={sort}
              onClick={() => handleSort("dueDate")}
            />
            <TH label="Patient" />
            <TH label="Tags" />
            <TH label="State" />
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
