import React from "react";

import Section from "../section";
import Checkbox from "../../common/checkbox";

import { useFiltersContext } from "../../_context/filters";
import { status } from "../../constants";

import styles from "./index.module.css";

const Status = () => {
  const [filters, dispatch_f] = useFiltersContext();

  const handleFilter = ({ target }) => {
    dispatch_f({ type: "FILTER_STATUS", payload: target.dataset.id });
  };

  return (
    <Section title="Status" id="status">
      <div className={styles.container}>
        {status.map((item, i) => {
          return (
            <Checkbox
              key={i}
              id={`status-${i}`}
              dataId={item.id}
              label={item.label}
              onChange={handleFilter}
              checked={filters.status.includes(item.id)}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Status;
