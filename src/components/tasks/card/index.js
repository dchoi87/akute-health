import React from "react";
import classNames from "classnames";
import {
  BellFill,
  Paperclip,
  Square,
  CheckSquareFill,
  CircleFill,
  TagFill,
  GeoAltFill,
  PersonFill,
  ExclamationTriangleFill,
  HeartPulseFill,
} from "react-bootstrap-icons";

import Tags from "./tags";

import { useTasksContext } from "../context/tasks";

import styles from "./index.module.css";

const Cards = ({ task, showDesktopView, isCompactView, isSelected }) => {
  const [, dispatch_t] = useTasksContext();
  const isPastDue = task.duedate === "03-25-22";

  const handleOpen = ({ target }) => {
    if (target.className.includes("card_checkbox")) {
      return;
    }
    alert("open task");
  };

  const handleSelect = (e) => {
    dispatch_t({ type: "SELECT_TASK", payload: task.id });
  };

  return (
    <button
      className={classNames(styles.container, {
        [styles.compact]: isCompactView,
        [styles.selected]: isSelected,
      })}
      onClick={handleOpen}
      data-id={task.id}
    >
      <div className={styles.checkbox} onClick={handleSelect}>
        {isSelected ? <CheckSquareFill /> : <Square />}
      </div>
      <div className={styles.content}>
        <div className={styles.sectionTop}>
          <div className={styles.heading}>
            <div className={styles.title}>
              {isCompactView ? (
                <div
                  className={classNames(
                    styles.priorityCompact,
                    styles[task.priority]
                  )}
                >
                  <CircleFill />
                </div>
              ) : (
                <div
                  className={classNames(styles.priority, styles[task.priority])}
                >
                  {task.priority === "p1"
                    ? "urgent"
                    : task.priority || "no priority"}
                </div>
              )}
              <span>{task.title}</span>
              {task.attachment && <Paperclip />}
            </div>
            {!showDesktopView && task.owner && (
              <div className={styles.owner}>
                {task.owner !== "N/A" && (
                  <div>
                    {task.owner
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={styles.subHeading}>
            {showDesktopView && (
              <div className={styles.info}>
                <PersonFill />
                <span>{task.owner}</span>
              </div>
            )}
            <div
              className={classNames(styles.info, {
                [styles.pastDue]: isPastDue,
              })}
            >
              {isPastDue ? <ExclamationTriangleFill /> : <BellFill />}
              <span>{task.duedate}</span>
            </div>
            <div className={styles.info}>
              <GeoAltFill />
              <span>{task.state}</span>
            </div>
            {isCompactView && task.tags && (
              <div className={styles.info}>
                <TagFill />
                <span>{task.tags.length}</span>
              </div>
            )}
            <div className={styles.info}>
              <HeartPulseFill />
              <span>{task.patient}</span>
            </div>
          </div>
        </div>
        {task.description && (
          <div className={styles.sectionMid}>
            <div className={styles.description}>{task.description}</div>
          </div>
        )}
        {task.tags && (
          <div className={styles.sectionBottom}>
            <div className={styles.tagsWrapper}>
              <Tags tags={task.tags} count={showDesktopView ? 4 : 2} />
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default Cards;
