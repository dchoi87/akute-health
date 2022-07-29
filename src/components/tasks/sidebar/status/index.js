import React from "react";

import Section from "../section";
import Checkbox from "../../common/checkbox";

import styles from "./index.module.css";

import { status } from "../../constants";

const Status = () => {
  return (
    <Section title="Status" id="status">
      <div className={styles.container}>
        {status.map((item, i) => {
          return <Checkbox key={i} id={item.id} label={item.label} />;
        })}
      </div>
    </Section>
  );
};

export default Status;
