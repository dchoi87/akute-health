import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

const Input = ({ type, id, placeholder }) => {
  return (
    <input
      type={type}
      name={id}
      id={id}
      className={styles[type]}
      placeholder={placeholder}
    />
  );
};

export default Input;
