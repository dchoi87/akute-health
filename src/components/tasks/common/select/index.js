import React from "react";
import Select from "react-select";
import classNames from "classnames";

import styles from "./index.module.css";
import "./react-select.css";

const SelectContainer = ({
  options,
  placeholder,
  menuPlacement,
  defaultValue,
  customClass,
}) => {
  return (
    <div
      className={classNames("select", styles.container, styles[customClass])}
    >
      <Select
        options={options}
        className="tasks-select-container"
        classNamePrefix="tasks-select"
        placeholder={placeholder}
        isSearchable={false}
        menuPlacement={menuPlacement || "auto"}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default SelectContainer;
