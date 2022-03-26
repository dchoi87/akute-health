import React from "react";
import classNames from "classnames";
import { CircleFill } from "react-bootstrap-icons";

import styles from "./index.module.css";

const Checkbox = ({ label, id, section }) => {
  const _id = `checkbox-${id.toLowerCase().replace(" ", "-")}`;
  return (
    <div className={classNames(styles.container, styles[label.toLowerCase()])}>
      <input type="checkbox" id={_id} />
      {section === "priority" && <CircleFill />}
      <label htmlFor={_id}>{label}</label>
    </div>
  );
};

export default Checkbox;
