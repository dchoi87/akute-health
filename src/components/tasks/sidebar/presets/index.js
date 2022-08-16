import React, { useState } from "react";
import { ArrowClockwise, CloudArrowUp } from "react-bootstrap-icons";
import isEqual from "react-fast-compare";

import Section from "../section";
import Radio from "../../common/radio";
import Button from "../../common/button";
import Input from "../../common/input";

import { usePresetsData } from "../../hooks/useTasksData";
import { presetRadios, presetPayload } from "../../constants";

import styles from "./index.module.css";

const Presets = ({ filters, dispatch }) => {
  const { data: presets } = usePresetsData();
  const [selected, setSelected] = useState("today");
  // need logic for this
  const isAdmin = false;

  const getCustomSelections = (arr, id) => {
    return arr.find((el) => el.id === id);
  };

  const compare = {
    clinic: function (id) {
      // logic
      return true;
    },
    custom: function (id) {
      const state = {};
      const selections = getCustomSelections(presets, id).selections;

      for (let key in selections) {
        // sort selections for comparison
        selections[key].sort();
        // set and sort comparison object
        state[key] = filters[key].sort();
      }

      return isEqual(selections, state);
    },
  };

  const handleFilters = ({ target }) => {
    const id = target.dataset.id;
    const custom = getCustomSelections(presets, id);

    if (custom) {
      dispatch({ type: "FILTER_PRESETS", payload: custom.selections });
    } else {
      dispatch({
        type: "FILTER_PRESETS",
        payload: presetPayload[id].payload,
        source: presetPayload[id].source,
      });
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
            {presetRadios.map((item, i) => {
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
                  {isAdmin && selected === item.id && (
                    <Button
                      type="update"
                      onClick={handleUpdateFilter}
                      disabled={compare.clinic(item.id)}
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
                    id={`presets-${item.id}`}
                    dataId={item.id}
                    label={item.label}
                    name="presets"
                    onChange={handleFilters}
                  >
                    {selected === item.id && (
                      <Button
                        type="update"
                        onClick={handleUpdateFilter}
                        disabled={compare.custom(item.id)}
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
