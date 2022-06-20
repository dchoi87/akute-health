import React, { useState } from "react";
import { Collection } from "react-bootstrap-icons";
import Section from "../section";
import Button from "../../common/button";
import Checkbox from "../../common/checkbox";
import Input from "../../common/input";

import styles from "./index.module.css";

import { owner } from "../../data";

const Owner = () => {
  const [showGroup, setGroup] = useState(false);

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
                    id={`group-${i + 1}`}
                    label={`owner group ${i + 1}`}
                    customClass="group"
                  />
                );
              })}
          {owner.map((item, i) => {
            return <Checkbox key={i} id={item} label={item} />;
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
