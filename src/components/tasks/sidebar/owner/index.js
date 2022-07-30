import React, { useState } from "react";
import { Collection } from "react-bootstrap-icons";

import Section from "../section";
import Button from "../../common/button";
import Checkbox from "../../common/checkbox";
import Input from "../../common/input";

import { useOwnersData } from "../../hooks/useTasksData";

import styles from "./index.module.css";

const Owner = ({ dispatch }) => {
  const { data: owners } = useOwnersData();
  const [showGroup, setGroup] = useState(false);

  const handleFilter = ({ target }) => {
    dispatch({ type: "FILTER_OWNER", payload: target.dataset.id });
  };

  const handleGroup = () => {
    setGroup(!showGroup);
  };

  return (
    <Section title="Owner" id="owner">
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <Input type="search" id="owner-search" placeholder="Search Owner" />
          <Button
            type="collection"
            id="owner-group"
            onClick={handleGroup}
            isActive={showGroup}
          >
            <Collection />
          </Button>
        </div>
        <div className={styles.owners}>
          {showGroup &&
            Array(2)
              .fill()
              .map((item, i) => {
                return (
                  <Checkbox
                    key={i}
                    id={`owner-group-${i}`}
                    label={`owner group ${i + 1}`}
                    className={styles.group}
                    section="group"
                  />
                );
              })}
          {owners &&
            Object.keys(owners).map((owner, i) => {
              return (
                <Checkbox
                  key={i}
                  id={`owner-${i}`}
                  dataId={owner}
                  label={owners[owner]}
                  onChange={handleFilter}
                />
              );
            })}
        </div>
        <div>
          <Button type="more">Show More</Button>
        </div>
      </div>
    </Section>
  );
};

export default Owner;
