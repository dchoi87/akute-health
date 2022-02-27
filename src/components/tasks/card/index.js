import React from "react";
import classNames from "classnames/bind";
import {
  Alarm,
  PersonCircle,
  Tag,
  Paperclip,
  Circle,
} from "react-bootstrap-icons";

import styles from "./index.module.css";

const cx = classNames.bind(styles);

const Cards = ({ showDesktopView, isCompactView }) => {
  const shouldShowFullTags = showDesktopView;

  return (
    <button className={cx("container", { compact: isCompactView })}>
      <div className="select">
        <Circle />
      </div>
      <div className={styles.content}>
        <div className={styles.sectionTop}>
          <div className={styles.subsectionLeft}>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div className={styles.subsectionRight}>
            <div className={classNames(styles.priority, styles.urgent)}>
              Urgent
            </div>
          </div>
        </div>
        <div className={styles.sectionMiddle}>
          <div className={styles.description}>Some Description Text</div>
        </div>
        <div className={styles.sectionBottom}>
          <div className={styles.subsectionLeft}>
            <div className={styles.duedate}>
              <Alarm />
              <span>12-17-2021</span>
            </div>
            <div className={styles.patient}>
              <PersonCircle />
              <span>Daniel Choi</span>
            </div>
          </div>
          <div className={styles.subsectionRight}>
            {shouldShowFullTags ? (
              <>
                <div className={styles.tag}>Form Submission</div>
                <div className={styles.tag}>Doc Review</div>
                <div className={styles.tag}>+2</div>
              </>
            ) : (
              <div className={cx("tag", "consolidated")}>
                <Tag />
                <span>+3</span>
              </div>
            )}
            <div className={styles.attachment}>
              <Paperclip />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Cards;
