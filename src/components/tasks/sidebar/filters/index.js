import React from "react";
import Section from "../section";
import Select from "../../common/select";
import Button from "../../common/button";
import Input from "../../common/input";
import { ArrowClockwise, CloudArrowUp } from "react-bootstrap-icons";

import styles from "./index.module.css";

import { savedFilters } from "../../data";

const Filters = () => {
  return (
    <Section title="Saved Filters" id="filters">
      <div className={styles.filter}>
        <div className={styles.filterSection}>
          <div className={styles.filterLabel}>Select a Filter Preset</div>
          <div className={styles.filterInput}>
            <Select
              type="filters"
              options={savedFilters}
              customClass="filters"
              defaultValue={savedFilters[0]}
            />
            <Button type="overwrite" id="filters-overwrite">
              <ArrowClockwise />
            </Button>
          </div>
        </div>
        <div className={styles.filterSection}>
          <div className={styles.filterLabel}>Create a New Filter</div>
          <div className={styles.filterInput}>
            <Input type="text" id="create-filter" placeholder="Filter Name" />
            <Button type="save" id="filters-save">
              <CloudArrowUp />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Filters;
