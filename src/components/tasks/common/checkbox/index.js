import React from "react";
import classNames from "classnames";
import { CircleFill, PeopleFill } from "react-bootstrap-icons";

import styles from "./index.module.css";

const Checkbox = ({ label, id, section, customClass }) => {
  const _id = `checkbox-${id.toLowerCase().replace(" ", "-")}`;
  return (
    <div
      className={classNames(
        styles.container,
        styles[label.toLowerCase()],
        styles[customClass]
      )}
    >
      <input type="checkbox" id={_id} />
      {section === "priority" && <CircleFill />}
      <label
        htmlFor={_id}
        className={classNames({
          [styles.visuallyhidden]: !label,
        })}
      >
        {label}
      </label>
      {customClass === "group" && <PeopleFill />}
    </div>
  );
};

export default Checkbox;
