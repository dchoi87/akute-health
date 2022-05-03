import React from "react";

import styles from "./index.module.css";

const Radio = ({ label, id, name, idx }) => {
  const _id = `radio-${id.toLowerCase().replace(" ", "-")}`;
  return (
    <div className={styles.container}>
      <input
        type="radio"
        id={_id}
        name={name}
        value={label}
        defaultChecked={idx === 0}
      />
      <label htmlFor={_id}>{label}</label>
    </div>
  );
};

export default Radio;
