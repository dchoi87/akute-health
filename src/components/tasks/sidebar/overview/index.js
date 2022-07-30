import React from "react";
import moment from "moment";

import Section from "../section";
import Radio from "../../common/radio";

import styles from "./index.module.css";

import { overview } from "../../constants";

const Overview = ({ dispatch }) => {
  const handleFilters = ({ target }) => {
    // clean this up
    switch (target.dataset.id) {
      case "today": {
        dispatch({
          type: "FILTER_DATES",
          payload: moment().format("YYYY-MM-DD"),
        });
        break;
      }
      case "next-5-days": {
        dispatch({
          type: "FILTER_DATES",
          payload: moment().add(5, "days").format("YYYY-MM-DD"),
        });
        break;
      }
      // what to do about these?
      case "incomplete": {
        break;
      }
      case "complete": {
        break;
      }
    }
  };
  return (
    <Section title="Overview" id="overview">
      <div className={styles.container}>
        {overview.map((item, i) => {
          return (
            <Radio
              key={i}
              idx={i}
              id={`overview-${i}`}
              dataId={item.id}
              label={item.label}
              name="overview"
              onChange={handleFilters}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Overview;
