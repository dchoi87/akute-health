import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";

import Button from "../../common/button";

import styles from "./index.module.css";

const Section = ({ children, title }) => {
  const [isExpanded, setToggle] = useState(true);

  const handleSectionToggle = () => {
    setToggle(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <Button type="header" onClick={handleSectionToggle}>
        <div className={styles.header}>
          <span>{title}</span>
          {isExpanded ? <ChevronDown /> : <ChevronRight />}
        </div>
      </Button>
      {isExpanded && children}
    </div>
  );
};

export default Section;
