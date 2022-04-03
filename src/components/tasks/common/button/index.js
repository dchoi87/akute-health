import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

const Button = ({ children, id, type, isActive, onClick, customClass }) => {
  return (
    <button
      id={id}
      className={classNames(
        styles.normalize,
        styles[type],
        styles[customClass],
        {
          [styles.active]: isActive,
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
