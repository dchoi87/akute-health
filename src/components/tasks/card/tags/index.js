import React from "react";

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

export default Tags;
