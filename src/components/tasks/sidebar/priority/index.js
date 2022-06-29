import React from "react";

import Section from "../section";
import Checkbox from "../../common/checkbox";

import styles from "./index.module.css";

import { priority } from "../../data";

const Priority = () => {
  return (
    <Section title="Priority" id="priority">
      <div className={styles.container}>
        {priority.map((item, i) => {
          return <Checkbox key={i} id={item} label={item} section="priority" />;
        })}
      </div>
    </Section>
  );
};

export default Priority;
