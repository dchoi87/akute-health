import React from "react";

import styles from "./index.module.css";

const Radio = ({
  children,
  label,
  id,
  name,
  dataId,
  onChange,
  defaultChecked,
}) => {
  return (
    <div className={styles.container}>
      <input
        type="radio"
        id={id}
        name={name}
        value={label}
        defaultChecked={defaultChecked}
        data-id={dataId}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
};

export default Radio;
