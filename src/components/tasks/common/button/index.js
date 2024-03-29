import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

const Button = ({
  children,
  id,
  type,
  isActive,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      id={id}
      className={classNames(styles.normalize, styles[type], className, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
