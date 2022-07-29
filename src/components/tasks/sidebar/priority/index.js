import React from "react";

import Section from "../section";
import Checkbox from "../../common/checkbox";

import { useFiltersContext } from "../../context/filters";
import { priority } from "../../constants";

import styles from "./index.module.css";

const Priority = () => {
  const [, dispatch] = useFiltersContext();

  const handleSelect = ({ target }) => {
    dispatch({ type: "SELECT_PRIORITY", payload: target.dataset.id });
  };

  return (
    <Section title="Priority" id="priority">
      <div className={styles.container}>
        {priority.map((item, i) => {
          return (
            <Checkbox
              key={i}
              id={item.id}
              dataId={item.id}
              label={item.label}
              section="priority"
              onChange={handleSelect}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Priority;
