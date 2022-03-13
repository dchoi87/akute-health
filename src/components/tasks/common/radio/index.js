import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

const Radio = ({ label, id, name, idx }) => {
  const _id = id.toLowerCase().replace(" ", "-");
  return (
    <div className={styles.container}>
      <input
        type="radio"
        id={_id}
        name={name}
        value={_id}
        defaultChecked={idx === 0}
      />
      <label htmlFor={_id}>{label}</label>
    </div>
  );
};

export default Radio;
