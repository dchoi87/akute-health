import React from "react";
import moment from "moment";
import { ArrowClockwise, CloudArrowUp } from "react-bootstrap-icons";

import Section from "../section";
import Radio from "../../common/radio";
import Button from "../../common/button";
import Input from "../../common/input";

import { usePresetsData } from "../../hooks/useTasksData";
import { overview } from "../../constants";

import styles from "./index.module.css";

const Presets = ({ dispatch }) => {
  const { data: presets } = usePresetsData();

  const handleFilters = ({ target }) => {
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
      case "incomplete": {
        break;
      }
      case "complete": {
        break;
      }
    }
  };

  return (
    <Section title="Presets" id="presets">
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.header}>Clinic Wide</div>
          <div className={styles.radios}>
            {overview.map((item, i) => {
              return (
                <Radio
                  key={i}
                  idx={i}
                  id={`presets-${i}`}
                  dataId={item.id}
                  label={item.label}
                  name="presets"
                  onChange={handleFilters}
                >
                  {false && (
                    <Button>
                      <ArrowClockwise />
                    </Button>
                  )}
                </Radio>
              );
            })}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.header}>Custom</div>
          <div className={styles.radios}>
            {presets &&
              presets.map((item, i) => {
                return (
                  <Radio
                    key={i}
                    idx={i}
                    id={`presets-${i}`}
                    dataId={item.value}
                    label={item.label}
                    name="presets"
                    onChange={handleFilters}
                  >
                    {true && (
                      <Button type="update">
                        <ArrowClockwise />
                      </Button>
                    )}
                  </Radio>
                );
              })}
          </div>
          <Button type="more">Show More</Button>
        </div>
        <div className={styles.section}>
          <div className={styles.header}>Create a New Filter</div>
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

export default Presets;
