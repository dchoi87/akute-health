import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

const Button = ({ children, type }) => {
  return (
    <button className={classNames(styles.normalize, styles[type])}>
      {children}
    </button>
  );
};

export default Button;
