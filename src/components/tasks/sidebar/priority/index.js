import React from "react";
import { CircleFill } from "react-bootstrap-icons";

import Section from "../section";
import Checkbox from "../../common/checkbox";

import { useFiltersContext } from "../../_context/filters";
import { priority } from "../../constants";

import styles from "./index.module.css";

const Priority = () => {
  const [filters, dispatch_f] = useFiltersContext();

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
