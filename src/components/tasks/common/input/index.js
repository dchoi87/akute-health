import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

const Input = ({ type, name, id, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={styles[type]}
      placeholder={placeholder}
    />
  );
};

export default Input;
