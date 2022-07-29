import React from "react";

import Section from "../section";
import Radio from "../../common/radio";

import styles from "./index.module.css";

import { overview } from "../../constants";

const Overview = () => {
  return (
    <Section title="Overview" id="overview">
      <div className={styles.container}>
        {overview.map((item, i) => {
          return (
            <Radio
              key={i}
              idx={i}
              id={`overview-${i}`}
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
