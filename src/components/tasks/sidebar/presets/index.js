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
import { defaultPresets, presetPayload } from "../../constants";

import styles from "./index.module.css";

const Presets = ({ filters, dispatch }) => {
  const { data: presets } = usePresetsData();
  const { mutate: addPreset } = useAddPresetsData();
  const { mutate: updatePreset } = useUpdatePresetsData();
  const [selected, setSelected] = useState({ id: "today", value: "today" });
  const [inputValue, setInputValue] = useState("");
  const [showMoreClinic, setShowMoreClinic] = useState(false);
  const [showMoreCustom, setShowMoreCustom] = useState(false);
  const isAdmin = true; // TODO: logic

  // get selections obj from matching custom preset
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

  // compare logic for update disabled state
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

  // prep payload for POST/PUT
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
      ownerId: "616620c0df1f010009ea4a94", // TODO: grab from redux store
      clinicWide: isSubmit
        ? false
        : presets.find((el) => el.id === selected.id).clinicWide,
      _tenant: "", // TODO: ???
      order: isSubmit
        ? presets.length + 1
        : presets.find((el) => el.id === selected.id).order,
      selections: selections,
    };
  };

  // event handler for selecting preset
  const handleSelectPreset = ({ target }) => {
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

  // event handler for updating custom preset
  const handleUpdatePreset = () => {
    const event = "update";
    const payload = getPresetPayload(event);
    // pass to query hook and kick off mutation
    updatePreset(payload);
  };

  // event handler for creating new preset
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
            {defaultPresets.map((item, i) => {
              return (
                <Radio
                  key={i}
                  idx={i}
                  id={`presets-${item.id}`}
                  dataId={item.id}
                  label={item.label}
                  name="presets"
                  checked={item.id === selected.id}
                  onChange={handleSelectPreset}
                />
              );
            })}
            {presets &&
              presets
                .filter((item) => item.clinicWide)
                .map((item, i) => {
                  if (showMoreClinic || i < 2) {
                    return (
                      <Radio
                        key={i}
                        idx={i}
                        id={`presets-${item.id}`}
                        dataId={item.id}
                        label={item.label}
                        name="presets"
                        checked={item.id === selected.id}
                        onChange={handleSelectPreset}
                      >
                        {isAdmin && selected.id === item.id && (
                          <Button
                            type="update"
                            onClick={handleUpdatePreset}
                            disabled={compareSelections(item.id)}
                          >
                            <ArrowClockwise />
                          </Button>
                        )}
                      </Radio>
                    );
                  }
                })}
          </div>
          {presets && presets.filter((item) => item.clinicWide).length > 2 && (
            <Button
              type="more"
              onClick={() => setShowMoreClinic(!showMoreClinic)}
            >
              Show {showMoreClinic ? "Less" : "More"}
            </Button>
          )}
        </div>
        <div className={styles.section}>
          <div className={styles.header}>Custom Filters</div>
          <div className={styles.radios}>
            {presets &&
              presets
                .filter((item) => !item.clinicWide)
                .map((item, i) => {
                  if (showMoreCustom || i < 6) {
                    return (
                      <Radio
                        key={i}
                        idx={i}
                        id={`presets-${item.id}`}
                        dataId={item.id}
                        label={item.label}
                        name="presets"
                        checked={item.id === selected.id}
                        onChange={handleSelectPreset}
                      >
                        {selected.id === item.id && (
                          <Button
                            type="update"
                            onClick={handleUpdatePreset}
                            disabled={compareSelections(item.id)}
                          >
                            <ArrowClockwise />
                          </Button>
                        )}
                      </Radio>
                    );
                  }
                })}
          </div>
          {presets && presets.filter((item) => !item.clinicWide).length > 6 && (
            <Button
              type="more"
              onClick={() => setShowMoreCustom(!showMoreCustom)}
            >
              Show {showMoreCustom ? "Less" : "More"}
            </Button>
          )}
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
