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
  const isAdmin = false; // TODO: logic

  const getCustomSelections = (arr, id) => {
    const custom = arr.find((el) => el.id === id);

    if (custom && Object.keys(custom).length) {
      // remove `query` key
      return Object.keys(custom.selections).reduce((acc, curr) => {
        acc[curr] = custom.selections[curr].query;
        return acc;
      }, {});
    }

    return null;
  };

  const compareSelections = (id) => {
    const state = {};
    const selections = getCustomSelections(presets, id);
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
  };

  const getPresetPayload = (event) => {
    const isSubmit = event === "submit";
    const queries = ["priority", "ownerId", "status", "tags"];
    // grab selections
    const selections = queries.reduce((acc, curr) => {
      if (filters[curr].length) {
        acc[curr] = { query: filters[curr] };
      }
      return acc;
    }, {});

    return {
      id: isSubmit ? `filter-${presets.length + 1}` : selected.id,
      label: isSubmit ? inputValue : selected.value,
      ownerId: null, // TODO: grab from redux store
      clinicWide: true, // TODO: logic
      _tenant: "", // TODO: ???
      order: isSubmit
        ? presets.length + 1
        : presets.find((el) => el.id === selected.id).order,
      selections: selections,
    };
  };

  const handleSelectFilter = ({ target }) => {
    const id = target.dataset.id;
    const value = target.value;
    const custom = getCustomSelections(presets, id);

    if (custom) {
      dispatch({ type: "FILTER_PRESETS", payload: custom });
    } else {
      dispatch({
        type: "FILTER_PRESETS",
        payload: presetPayload[id].payload,
        source: presetPayload[id].source,
      });
    }

    setSelected({ id, value });
  };

  const handleUpdateFilter = () => {
    const event = "update";
    const payload = getPresetPayload(event);
    // pass to query hook and kick off mutation
    updatePreset(payload);
  };

  const onSubmit = (e) => {
    const event = "submit";
    const payload = getPresetPayload(event);
    // pass to query hook and kick off mutation
    addPreset(payload);
    // select radio button
    setSelected({ id: `filter-${presets.length + 1}`, value: inputValue });
    // reset form
    e.target.reset();
    // prevent form submission
    e.preventDefault();
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
                  checked={item.id === selected.id}
                  onChange={handleSelectFilter}
                >
                  {isAdmin && selected.id === item.id && (
                    <Button
                      type="update"
                      onClick={handleUpdateFilter}
                      disabled={true} // TODO: logic
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
                    checked={item.id === selected.id}
                    onChange={handleSelectFilter}
                  >
                    {selected.id === item.id && (
                      <Button
                        type="update"
                        onClick={handleUpdateFilter}
                        disabled={compareSelections(item.id)}
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
            <Button type="save" id="filters-save" disabled={!inputValue}>
              <CloudArrowUp />
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Presets;
