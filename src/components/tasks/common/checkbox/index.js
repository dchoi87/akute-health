import React from "react";
import classNames from "classnames";
import { CircleFill, Collection } from "react-bootstrap-icons";

import styles from "./index.module.css";

const Checkbox = ({
  label,
  id,
  dataId,
  section,
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
      {section === "priority" && <CircleFill />}
      <label
        htmlFor={id}
        className={classNames({
          [styles.visuallyhidden]: !label,
        })}
      >
        {label}
      </label>
      {section === "group" && <Collection />}
    </div>
  );
};

export default Checkbox;
