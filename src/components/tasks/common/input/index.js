import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

const Input = ({ type, id, placeholder }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{placeholder}</label>
      <input
        type={type}
        name={id}
        id={id}
        className={styles[type]}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
