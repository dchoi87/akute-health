import React from "react";
import classNames from "classnames";
import { ArrowDownShort, ArrowUpShort } from "react-bootstrap-icons";

import styles from "./index.module.css";

const TH = ({ label, type, sort, onClick, className }) => {
  return (
    <th
      className={classNames(styles.sort, className, {
        [styles.selected]: sort && sort.type === type,
      })}
      onClick={onClick}
    >
      <span>{label}</span>
      {sort &&
        sort.type === type &&
        (sort.order === "desc" ? <ArrowDownShort /> : <ArrowUpShort />)}
    </th>
  );
};

export default TH;
