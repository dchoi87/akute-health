import React, { useState } from "react";
import { ArrowClockwise } from "react-bootstrap-icons";

import Radio from "../../../common/radio";
import Button from "../../../common/button";

import { defaultPresets } from "../../../constants";

import styles from "./index.module.css";

const Group = ({
  title,
  isClinicWide,
  presets,
  selected,
  isAdmin,
  handleSelectPreset,
  handleUpdatePreset,
  compareSelections,
}) => {
  const [showMore, setShowMore] = useState(false);
  const showCount = isClinicWide ? 2 : 6;

  return (
    <>
      <div className={styles.header}>{title}</div>
      <div className={styles.radios}>
        {isClinicWide &&
          defaultPresets.map((item, i) => {
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
            .filter((item) => {
              return isClinicWide ? item.clinicWide : !item.clinicWide;
            })
            .map((item, i) => {
              if (showMore || i < showCount) {
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
                    {((isClinicWide && isAdmin) || !isClinicWide) &&
                      selected.id === item.id && (
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
      {presets &&
        presets.filter((item) => {
          return isClinicWide ? item.clinicWide : !item.clinicWide;
        }).length > showCount && (
          <Button type="more" onClick={() => setShowMore(!showMore)}>
            Show {showMore ? "Less" : "More"}
          </Button>
        )}
    </>
  );
};

export default Group;
