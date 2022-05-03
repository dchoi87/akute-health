import React from "react";

import styles from "./index.module.css";
// note: will probably have to develop custom dropdown
// due to lack of styling available for default select
const Select = ({ options, id }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={`select-${id}`}>{id}</label>
      <select name={id} id={`select-${id}`} className={styles[id]}>
        {options.map((item, i) => {
          return (
            <option key={i} value={item.id}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
