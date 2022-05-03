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

import styles from "./index.module.css";

const Tags = ({ tags, count }) => {
  return (
    <>
      {tags.slice(0, count).map((tag, i) => {
        return (
          <div key={i} className={styles.tag}>
            {tag}
          </div>
        );
      })}
      {tags.length > 4 && (
        <div className={styles.tag}>+{tags.length - count}</div>
      )}
    </>
  );
};

const Cards = ({
  task,
  showDesktopView,
  isCompactView,
  isSelected,
  handleSelectItem,
}) => {
  const isPastDue = task.duedate === "03-25-22";
  return (
    <button
      className={classNames(styles.container, {
        [styles.compact]: isCompactView,
        [styles.selected]: isSelected,
      })}
      onClick={handleSelectItem}
      data-id={task.id}
    >
      <div className={styles.select}>
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
                  {task.priority}
                </div>
              )}
              <span>{task.title}</span>
              {task.attachment && <Paperclip />}
            </div>
            {!showDesktopView && (
              <div className={styles.owner}>
                <div>
                  {task.owner
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </div>
              </div>
            )}
          </div>
          <div className={styles.subHeading}>
            {showDesktopView && (
              <div className={styles.info}>
                <PersonFill />
                {task.owner}
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
            {isCompactView && (
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
        <div className={styles.sectionMid}>
          <div className={styles.description}>{task.description}</div>
        </div>
        <div className={styles.sectionBottom}>
          <div className={styles.tagsWrapper}>
            <Tags tags={task.tags} count={showDesktopView ? 4 : 2} />
          </div>
        </div>
      </div>
    </button>
  );
};

export default Cards;
