import React, { useState } from "react";
import { ArrowClockwise, CloudArrowUp } from "react-bootstrap-icons";
import isEqual from "react-fast-compare";

import Section from "../section";
import Radio from "../../common/radio";
import Button from "../../common/button";
import Input from "../../common/input";

import {
  usePresetsData,
  useAddPresetsData,
  useUpdatePresetsData,
} from "../../hooks/useTasksData";
import { clinicWideFilters, presetPayload } from "../../constants";

import styles from "./index.module.css";

const Presets = ({ filters, dispatch }) => {
  const { data: presets } = usePresetsData();
  const { mutate: addPreset } = useAddPresetsData();
  const { mutate: updatePreset } = useUpdatePresetsData();
  const [selected, setSelected] = useState({ id: "today", value: "today" });
  const [inputValue, setInputValue] = useState("");
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
      const queries = ["priority", "ownerId", "status", "tags"];

      // sort selections for comparison
      for (let key in selections) {
        selections[key].sort();
      }

      // set and sort comparison object
      for (let key of queries) {
        if (filters[key].length) {
          state[key] = filters[key].sort();
        }
      }

      return isEqual(selections, state);
    },
  };

  const handleFilters = ({ target }) => {
    const id = target.dataset.id;
    const value = target.value;
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

    setSelected({ id, value });
  };

  const onSubmit = (e) => {
    const queries = ["priority", "ownerId", "status", "tags"];
    // grab selections
    const selections = queries.reduce((acc, curr) => {
      if (filters[curr].length) {
        acc[curr] = filters[curr];
      }
      return acc;
    }, {});
    // pass to query hook and kick off mutation
    addPreset({
      id: `filter-${presets.length + 1}`,
      label: inputValue,
      selections: selections,
    });
    // prevent form submission
    e.preventDefault();
  };

  const handleUpdateFilter = () => {
    const queries = ["priority", "ownerId", "status", "tags"];
    // grab selections
    const selections = queries.reduce((acc, curr) => {
      if (filters[curr].length) {
        acc[curr] = filters[curr];
      }
      return acc;
    }, {});
    // pass to query hook and kick off mutation
    updatePreset({
      id: selected.id,
      label: selected.value,
      selections: selections,
    });
  };

  return (
    <Section title="Presets" id="presets">
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.header}>Clinic Wide Filters</div>
          <div className={styles.radios}>
            {clinicWideFilters.map((item, i) => {
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
                  {isAdmin && selected.id === item.id && (
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
                    {selected.id === item.id && (
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
          <form className={styles.input} onSubmit={onSubmit}>
            <Input
              type="text"
              id="create-filter"
              placeholder="Filter Name"
              onChange={({ target }) => setInputValue(target.value)}
            />
            <Button type="save" id="filters-save">
              <CloudArrowUp />
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Presets;
