import React from "react";
import { CardChecklist, CheckLg, Trash } from "react-bootstrap-icons";

import Button from "../common/button";
import Checkbox from "../common/checkbox";

import { useTasksContext } from "../_context/tasks";

import styles from "./index.module.css";

const SelectionBar = ({ tasks, selectedCount, isTableView, limit }) => {
  const [{ selected }, dispatch_t] = useTasksContext();

  const handleSelectAll = () => {
    dispatch_t({ type: "SELECT_ALL", payload: tasks });
  };

  return (
    <div className={styles.container}>
      <div className={styles.count}>
        {isTableView ? (
          <CardChecklist />
        ) : (
          <Checkbox
            id="select-all"
            className={styles.checkbox}
            label=""
            onChange={handleSelectAll}
            checked={selected.length === limit}
          />
        )}
        <span>
          {selectedCount} Task
          {selectedCount > 1 && "s"} Selected
        </span>
      </div>
      <div className={styles.buttons}>
        <Button type="complete">
          <CheckLg />
        </Button>
        <Button type="trash">
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default SelectionBar;
