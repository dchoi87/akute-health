import React from "react";
import Section from "../section";

import Checkbox from "../../common/checkbox";

import styles from "./index.module.css";

import { status } from "../../data";

const Status = () => {
  return (
    <Section title="Status" id="status">
      <div className={styles.status}>
        {status.map((item, i) => {
          return <Checkbox key={i} id={item} label={item} />;
        })}
      </div>
    </Section>
  );
};

export default Status;
