import React from "react";

import styles from "./index.module.css";

const Radio = ({ label, id, name, idx, dataId, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        type="radio"
        id={id}
        name={name}
        value={label}
        defaultChecked={idx === 0}
        data-id={dataId}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;
