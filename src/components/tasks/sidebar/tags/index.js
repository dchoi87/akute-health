import React, { useState } from "react";
import { Star } from "react-bootstrap-icons";
import classNames from "classnames";

import Section from "../section";
import Button from "../../common/button";
import Checkbox from "../../common/checkbox";
import Input from "../../common/input";

import { useTagsData } from "../../hooks/useTasksData";

import styles from "./index.module.css";

const Tags = ({ filters, dispatch }) => {
  const { data: tags } = useTagsData();
  const [showGroup, setGroup] = useState(false);

  const handleFilter = ({ target }) => {
    dispatch({ type: "FILTER_TAGS", payload: target.dataset.id });
  };

  const handleGroup = () => {
    setGroup(!showGroup);
  };

  return (
    <Section title="Tags" id="tags">
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <Input type="search" id="tags-search" placeholder="Search Tags" />
          <Button
            type="collection"
            id="tag-group"
            onClick={handleGroup}
            isActive={showGroup}
          >
            <Star />
          </Button>
        </div>
        <div className={styles.tags}>
          {showGroup &&
            ["Some Group", "Another Group"].map((item, i) => {
              return (
                <Checkbox
                  key={i}
                  id={`tags-group-${i}`}
                  dataId={item}
                  label={item}
                  onChange={handleFilter}
                  className={classNames(styles.tag, styles.group)}
                />
              );
            })}
          {tags &&
            tags.tasks.map((item, i) => {
              return (
                <Checkbox
                  key={i}
                  id={`tags-${i}`}
                  dataId={item}
                  label={item}
                  onChange={handleFilter}
                  className={styles.tag}
                  checked={filters.tags.includes(item)}
                />
              );
            })}
        </div>
        <Button type="more">Show More</Button>
      </div>
    </Section>
  );
};

export default Tags;
