import React from "react";
import classNames from "classnames";
import { CircleFill, Collection } from "react-bootstrap-icons";

import styles from "./index.module.css";

const Checkbox = ({
  label,
  id,
  dataId,
  section,
  customClass,
  onChange,
  checked,
}) => {
  return (
    <div
      className={classNames(
        styles.container,
        styles[label && label.toLowerCase()],
        styles[customClass]
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
      {customClass === "group" && <Collection />}
    </div>
  );
};

export default Checkbox;
