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
  className,
  onChange,
}) => {
  return (
    <div className={classNames("select", styles.container, className)}>
      <Select
        options={options}
        className="tasks-select-container"
        classNamePrefix="tasks-select"
        placeholder={placeholder}
        isSearchable={false}
        menuPlacement={menuPlacement || "auto"}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectContainer;
