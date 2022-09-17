import React from "react";

import Checkbox from "../common/checkbox";
import Row from "./row";
import TH from "./th";

import { useWindowHeight } from "../_hooks/useResize";
import { useSort } from "../_hooks/useSort";
import { useTasksData } from "../_hooks/useTasksData";
import { useFiltersContext } from "../_context/filters";
import { useTasksContext } from "../_context/tasks";

import styles from "./index.module.css";

const Table = () => {
  const [filters, dispatch_f] = useFiltersContext();
  const [{ selected }, dispatch_t] = useTasksContext();
  const { data: tasks } = useTasksData(filters);
  const [sort, handleSort] = useSort(dispatch_f);
  const tableHeight = useWindowHeight() - 147 - (selected.length ? 62 : 0);

  const handleSelectAll = () => {
    dispatch_t({ type: "SELECT_ALL", payload: tasks });
  };

  const handleSelect = ({ target }) => {
    const id = target.dataset.id;
    dispatch_t({ type: "SELECT_TASK", payload: id });
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
                onChange={handleSelectAll}
                checked={selected.length === filters.limit}
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
                  handleSelect={handleSelect}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
