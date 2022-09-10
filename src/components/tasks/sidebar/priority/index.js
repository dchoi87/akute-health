import React from "react";
import { CircleFill } from "react-bootstrap-icons";

import Section from "../section";
import Checkbox from "../../common/checkbox";

import { priority } from "../../constants";

import styles from "./index.module.css";

const Priority = ({ filters, dispatch_f }) => {
  const handleFilter = ({ target }) => {
    dispatch_f({ type: "FILTER_PRIORITY", payload: target.dataset.id });
  };

  return (
    <Section title="Priority" id="priority">
      <div className={styles.container}>
        {priority.map((item, i) => {
          return (
            <Checkbox
              key={i}
              id={`priority-${i}`}
              dataId={item.id}
              label={item.label}
              section="priority"
              onChange={handleFilter}
              checked={filters.priority.includes(item.id)}
            >
              <CircleFill />
            </Checkbox>
          );
        })}
      </div>
    </Section>
  );
};

export default Priority;
