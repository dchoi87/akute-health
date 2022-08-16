import React from "react";

import styles from "./index.module.css";

const Input = ({ type, id, placeholder, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{placeholder}</label>
      <input
        type={type}
        name={id}
        id={id}
        className={styles[type]}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
