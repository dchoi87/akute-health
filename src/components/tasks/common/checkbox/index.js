import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

const Checkbox = ({ label, id }) => {
  const _id = `checkbox-${id.toLowerCase().replace(" ", "-")}`;
  return (
    <div className={styles.container}>
      <input type="checkbox" id={_id} />
      <label htmlFor={_id}>{label}</label>
    </div>
  );
};

export default Checkbox;
