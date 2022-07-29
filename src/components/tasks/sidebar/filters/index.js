import React from "react";
import { ArrowClockwise, CloudArrowUp } from "react-bootstrap-icons";

import Section from "../section";
import Select from "../../common/select";
import Button from "../../common/button";
import Input from "../../common/input";

import { usePresetsData } from "../../hooks/useTasksData";

import styles from "./index.module.css";

const Filters = () => {
  const { data: presets } = usePresetsData();

  return (
    <Section title="Saved Filters" id="filters">
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.label}>Select a Filter Preset</div>
          <div className={styles.input}>
            <Select
              type="filters"
              options={presets && presets}
              customClass="filters"
              defaultValue={presets && presets[0]}
            />
            <Button type="overwrite" id="filters-overwrite">
              <ArrowClockwise />
            </Button>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.label}>Create a New Filter</div>
          <div className={styles.input}>
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
