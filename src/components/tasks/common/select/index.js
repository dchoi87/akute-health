import React from "react";
import Select from "react-select";
import { SortDown, SortUp } from "react-bootstrap-icons";
import classNames from "classnames";

import Button from "..//button";

import styles from "./index.module.css";
import "./react-select.css";

const SelectContainer = ({
  type,
  options,
  placeholder,
  handleSortOrder,
  isDesc,
  menuPlacement,
  defaultValue,
}) => {
  return (
    <div className={classNames("select", styles.container)}>
      <Select
        options={options}
        className="tasks-select-container"
        classNamePrefix="tasks-select"
        placeholder={placeholder}
        isSearchable={false}
        menuPlacement={menuPlacement || "auto"}
        defaultValue={defaultValue}
      />
      {type === "sort" && (
        <Button type="sort" onClick={handleSortOrder}>
          {isDesc ? <SortDown /> : <SortUp />}
        </Button>
      )}
    </div>
  );
};

export default SelectContainer;
