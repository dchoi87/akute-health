import React from "react";
import Select from "react-select";
import { SortDown, SortUp } from "react-bootstrap-icons";

import Button from "..//button";

import styles from "./index.module.css";

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    fontWeight: 500,
    fontSize: "14px",
  }),
  control: (provided, state) => ({
    ...provided,
    border: 0,
  }),
};

const SelectContainer = ({ options, handleSortOrder, isDesc }) => {
  return (
    <div className={styles.container}>
      <Select
        styles={customStyles}
        options={options}
        className="tasks-select-container"
        classNamePrefix="tasks-select"
      />
      <Button type="sort" onClick={handleSortOrder}>
        {isDesc ? <SortDown /> : <SortUp />}
      </Button>
    </div>
  );
};

export default SelectContainer;
