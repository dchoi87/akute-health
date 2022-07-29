import React, { useState } from "react";
import { Collection } from "react-bootstrap-icons";

import Section from "../section";
import Button from "../../common/button";
import Input from "../../common/input";

import { useTagsData } from "../../hooks/useTasksData";

import styles from "./index.module.css";

const Tags = () => {
  const { data: tags } = useTagsData();
  const [showGroup, setGroup] = useState(false);

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
            <Collection />
          </Button>
        </div>
        <div className={styles.tags}>
          {showGroup &&
            Array(2)
              .fill()
              .map((item, i) => {
                return (
                  <Button key={i} type="tag" customClass="group">
                    Tag Group {i + 1}
                    <Collection />
                  </Button>
                );
              })}
          {tags &&
            tags.tasks.map((item, i) => {
              return (
                <Button key={i} type="tag" isActive={i < 3}>
                  {item}
                </Button>
              );
            })}
        </div>
        <div>
          <Button type="more">Show More</Button>
        </div>
      </div>
    </Section>
  );
};

export default Tags;
