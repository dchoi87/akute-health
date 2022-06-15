import React from "react";
import Section from "../section";
import Radio from "../../common/radio";

import styles from "./index.module.css";

import { overview } from "../../data";

const Overview = () => {
  return (
    <Section title="Overview" id="overview">
      <div className={styles.overview}>
        {overview.map((item, i) => {
          return (
            <Radio
              key={i}
              idx={i}
              id={item.label}
              label={item.label}
              name="overview"
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Overview;
