import React from "react";
import { CaretDownFill } from "react-bootstrap-icons";

import Checkbox from "../common/checkbox";
import Row from "./row";

import { useWindowHeight } from "../hooks";
import { useTasks } from "../context";

import styles from "./index.module.css";

const Table = ({ tasks, selectedItems }) => {
  const [state, dispatch] = useTasks();
  const tableHeight = useWindowHeight() - 147 - (selectedItems.length ? 62 : 0);

  const handleClick = ({ target }) => {
    const id = target.dataset.id;
    dispatch({ type: "select", task: id });
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
              />
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
          {tasks.map((item, i) => {
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
