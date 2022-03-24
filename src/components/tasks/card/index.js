import React from "react";
import classNames from "classnames";
import {
  Alarm,
  Person,
  Paperclip,
  Circle,
  CheckCircleFill,
  Tag,
  GeoAlt
} from "react-bootstrap-icons";

import styles from "./index.module.css";

const Cards = ({
  task,
  showDesktopView,
  isCompactView,
  isSelected,
  handleSelectItem,
}) => {
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
        {isSelected ? <CheckCircleFill /> : <Circle />}
      </div>
      <div className={styles.content}>
        <div className={styles.sectionTop}>
          <div className={styles.headingWrapper}>
            <div className={styles.title}>
              <span>{task.title}</span>
              {task.attachment && <Paperclip />}
            </div>
            <div className={styles.priorityWrapper}>
              <div
                className={classNames(styles.priority, styles[task.priority])}
              >
                {task.priority}
              </div>
            </div>
          </div>
          <div className={styles.subHeading}>
            <div className={styles.info}>{task.owner}</div>
            <div className={styles.info}>
              <Alarm />
              <span>{task.duedate}</span>
            </div>
            <div className={styles.info}>
              <Person />
              <span>{task.patient}</span>
            </div>
            {
              isCompactView && (
                <>
                  <div className={styles.info}>
                    <Tag />
                    <span>{task.tags.length} Tags</span>
                  </div>
                  <div className={styles.info}>
                    <GeoAlt />
                    <span>{task.state}</span>
                  </div>
                </>
              )
            }
          </div>
        </div>
        <div className={styles.sectionMid}>
          <div className={styles.description}>{task.description}</div>
        </div>
        <div className={styles.sectionBottom}>
          <div className={styles.tagsWrapper}>
            {/* todo: dry this */}
            {showDesktopView ? (
              <>
                {task.tags.slice(0, 4).map((tag, i) => {
                  return (
                    <div key={i} className={styles.tag}>
                      {tag}
                    </div>
                  );
                })}
                {task.tags.length > 4 && (
                  <div className={styles.tag}>+{task.tags.length - 4}</div>
                )}
              </>
            ) : (
              <>
                {task.tags.slice(0, 2).map((tag, i) => {
                  return (
                    <div key={i} className={styles.tag}>
                      {tag}
                    </div>
                  );
                })}
                {task.tags.length > 4 && (
                  <div className={styles.tag}>+{task.tags.length - 2}</div>
                )}
              </>
            )}
          </div>
          <div className={styles.appointedState}>{task.state}</div>
        </div>
      </div>
    </button>
  );
};

export default Cards;
