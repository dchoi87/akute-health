import React from "react";
import classNames from "classnames/bind";
import {
  Alarm,
  Person,
  Tag,
  Paperclip,
  Circle,
} from "react-bootstrap-icons";

import styles from "./index.module.css";
import { tags } from "../data";

const cx = classNames.bind(styles);

const Cards = ({ task, showDesktopView, isCompactView }) => {

  return (
    <button className={cx("container", {compact: isCompactView})}>
      <div className={styles.select}>
        <Circle />
      </div>
      <div className={styles.content}>
        <div className={styles.sectionTop}>
          <div className={styles.headingWrapper}>
            <div className={styles.title}>
              <span>{task.title}</span>
              {
                task.attachment &&
                <Paperclip />
              }
            </div>
            <div className={styles.priorityWrapper}>
              <div className={cx("priority", styles[task.priority])}>{task.priority}</div>
            </div>
          </div>
          <div className={styles.subHeading}>
            <div className={styles.owner}>{task.owner}</div>
            <div className={styles.duedate}>
              <Alarm />
              <span>{task.duedate}</span>
            </div>
            <div className={styles.patient}>
              <Person />
              <span>{task.patient}</span>
            </div>
          </div>
        </div>
        <div className={styles.sectionMid}>
          <div className={styles.description}>
            {task.description}
          </div>
        </div>
        <div className={styles.sectionBottom}>
          <div className={styles.tagsWrapper}>
            {/* todo: dry this */}
            {
              showDesktopView ? (
                <>
                  {
                    task.tags.slice(0, 4).map((tag, i) => {
                      return (
                        <div key={i} className={styles.tag}>{tag}</div>
                      )
                    })
                  }
                  {
                    task.tags.length > 4 &&
                    <div className={styles.tag}>+{task.tags.length - 4}</div>
                  }
                </>
              ) : (
                <>
                  {
                    task.tags.slice(0, 2).map((tag, i) => {
                      return (
                        <div key={i} className={styles.tag}>{tag}</div>
                      )
                    })
                  }
                  {
                    task.tags.length > 4 &&
                    <div className={styles.tag}>+{task.tags.length - 2}</div>
                  }
                </>
              )
            }
            
          </div>
          <div className={styles.appointedState}>{task.state}</div>
        </div>
      </div>
    </button>
  );
};

export default Cards;
