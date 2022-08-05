import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

const Checkbox = ({
  children,
  label,
  id,
  dataId,
  onChange,
  checked,
  className,
}) => {
  return (
    <div
      className={classNames(
        styles.container,
        styles[label && label.toLowerCase()],
        className
      )}
    >
      <input
        type="checkbox"
        id={id}
        data-id={dataId}
        onChange={onChange}
        checked={checked}
      />
      {children}
      <label
        htmlFor={id}
        className={classNames({
          [styles.visuallyhidden]: !label,
        })}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
