import React from "react";
import { CardChecklist, CheckLg, Trash } from "react-bootstrap-icons";

import Button from "../common/button";

import styles from "./index.module.css";

const SelectionBar = ({ selectedCount }) => {
  return (
    <div className={styles.container}>
      <div className={styles.count}>
        <CardChecklist />
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
