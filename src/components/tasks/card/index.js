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

const cx = classNames.bind(styles);

const Cards = ({ showDesktopView, isCompactView }) => {

  return (
    <button className={cx("container", {compact: isCompactView})}>
      <div className={styles.select}>
        <Circle />
      </div>
      <div className={styles.content}>
        <div className={styles.sectionTop}>
          <div className={styles.headingWrapper}>
            <div className={styles.title}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
              <Paperclip />
            </div>
            <div className="">
              <div className={cx("priority", "urgent")}>Urgent</div>
            </div>
          </div>
          <div className={styles.subHeading}>
            <div className={styles.owner}>Cooper Kupp</div>
            <div className={styles.duedate}>
              <Alarm />
              <span>12-07-2022</span>
            </div>
            <div className={styles.patient}>
              <Person />
              <span>Ronit Ghosh</span>
            </div>
          </div>
        </div>
        <div className={styles.sectionMid}>
          <div className={styles.description}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className={styles.sectionBottom}>
          <div className={styles.tagsWrapper}>
            {
              showDesktopView ? (
                <>
                  <div className={styles.tag}>Form Submission</div>
                  <div className={styles.tag}>Doc Review</div>
                  <div className={styles.tag}>Assessments</div>
                  <div className={styles.tag}>Diagnostic Reports</div>
                  <div className={styles.tag}>+2</div>
                </>
              ) : (
                <>
                  <div className={styles.tag}>Form Submission</div>
                  <div className={styles.tag}>Doc Review</div>
                  <div className={styles.tag}>+4</div>
                </>
              )
            }
            
          </div>
          <div className={styles.appointedState}>No State</div>
        </div>
      </div>
    </button>
  );
};

export default Cards;
