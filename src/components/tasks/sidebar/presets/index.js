import React, { useState } from "react";
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
  const [selected, setSelected] = useState("incomplete");

  const handleFilters = ({ target }) => {
    const id = target.dataset.id;

    switch (id) {
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
        dispatch({ type: "FILTER_DATES", payload: "" });
        dispatch({
          type: "FILTER_STATUS",
          payload: ["not-started", "in-progress", ""],
          source: "preset",
        });
        break;
      }
      case "complete": {
        dispatch({ type: "FILTER_DATES", payload: "" });
        dispatch({
          type: "FILTER_STATUS",
          payload: ["complete"],
          source: "preset",
        });
        break;
      }
    }

    setSelected(id);
  };

  const handleUpdateFilter = () => {};

  return (
    <Section title="Presets" id="presets">
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.header}>Clinic Wide Filters</div>
          <div className={styles.radios}>
            {overview.map((item, i) => {
              return (
                <Radio
                  key={i}
                  idx={i}
                  id={`presets-${item.id}`}
                  dataId={item.id}
                  label={item.label}
                  name="presets"
                  defaultChecked={item.id === "today"}
                  onChange={handleFilters}
                >
                  {/* should show for admin only */}
                  {selected === item.id && (
                    <Button
                      type="update"
                      onClick={handleUpdateFilter}
                      disabled={true}
                    >
                      <ArrowClockwise />
                    </Button>
                  )}
                </Radio>
              );
            })}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.header}>Custom Filters</div>
          <div className={styles.radios}>
            {presets &&
              presets.map((item, i) => {
                return (
                  <Radio
                    key={i}
                    idx={i}
                    id={`presets-${item.value}`}
                    dataId={item.value}
                    label={item.label}
                    name="presets"
                    onChange={handleFilters}
                  >
                    {/* should show when filter has been updated */}
                    {selected === item.value && (
                      <Button
                        type="update"
                        onClick={handleUpdateFilter}
                        disabled={true}
                      >
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
