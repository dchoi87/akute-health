import React, { useState } from "react";
import classNames from "classnames";
import {
  ChevronDown,
  ChevronRight,
  PeopleFill,
  TagsFill,
} from "react-bootstrap-icons";
import Button from "../common/button";
import Checkbox from "../common/checkbox";
import Input from "../common/input";
import Radio from "../common/radio";

import styles from "./index.module.css";

import { tags, overview, priority, owner, status, savedFilters } from "../data";

const Section = ({ children, title, id }) => {
  const [isExpanded, setToggle] = useState(true);

  const handleSectionToggle = () => {
    setToggle(!isExpanded);
  };

  return (
    <div className={styles.section}>
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

const SideBar = ({ isOpen }) => {
  const [showOwnerGroup, setOwnerGroup] = useState(false);
  const [showTagGroup, setTagGroup] = useState(false);

  const handleGroup = ({ currentTarget }) => {
    switch (currentTarget.id) {
      case "owner-group": {
        return setOwnerGroup(!showOwnerGroup);
      }
      case "tag-group": {
        return setTagGroup(!showTagGroup);
      }
      default:
        return;
    }
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.open]: isOpen,
      })}
    >
      <Section title="Overview" id="overview">
        <div className={styles.overview}>
          {overview.map((item, i) => {
            return (
              <Radio
                key={i}
                idx={i}
                id={item.label}
                label={item.label}
                name="overview"
              />
            );
          })}
        </div>
      </Section>
      <Section title="Saved Filters" id="filters">
        <div className={styles.filters}>
          <div className={styles.filtersWrapper}>
            {savedFilters.map((item, i) => {
              return (
                <Radio
                  key={i}
                  idx={i}
                  id={item.label}
                  label={item.label}
                  name="filters"
                />
              );
            })}
          </div>
          <div className={styles.options}>
            <Button type="clear">
              <span>Clear Presets</span>
            </Button>
          </div>
        </div>
      </Section>
      <Section title="Priority" id="priority">
        <div className={styles.priority}>
          {priority.map((item, i) => {
            return (
              <Checkbox key={i} id={item} label={item} section="priority" />
            );
          })}
        </div>
      </Section>
      <Section title="Owner" id="owner">
        <div className={styles.owner}>
          <div className={styles.toolbar}>
            <Input type="search" id="owner-search" placeholder="Search Owner" />
            <Button type="collection" id="owner-group" onClick={handleGroup}>
              <PeopleFill />
            </Button>
          </div>
          <div className={styles.ownerWrapper}>
            {showOwnerGroup &&
              Array(2)
                .fill()
                .map((item, i) => {
                  return (
                    <Checkbox
                      key={i}
                      id={`group-${i + 1}`}
                      label={`owner group ${i + 1}`}
                      customClass="group"
                    />
                  );
                })}
            {owner.map((item, i) => {
              return <Checkbox key={i} id={item} label={item} />;
            })}
          </div>
          <div className={styles.more}>
            <Button type="more">Show More</Button>
          </div>
        </div>
      </Section>
      <Section title="Status" id="status">
        <div className={styles.status}>
          {status.map((item, i) => {
            return <Checkbox key={i} id={item} label={item} />;
          })}
        </div>
      </Section>
      <Section title="Tags" id="tags">
        <div className={styles.tags}>
          <div className={styles.toolbar}>
            <Input type="search" id="tags-search" placeholder="Search Tags" />
            <Button type="collection" id="tag-group" onClick={handleGroup}>
              <TagsFill />
            </Button>
          </div>
          <div className={styles.tagsWrapper}>
            {showTagGroup &&
              Array(2)
                .fill()
                .map((item, i) => {
                  return (
                    <Button key={i} type="tag" customClass="group">
                      Tag Group {i + 1}
                      <TagsFill />
                    </Button>
                  );
                })}
            {tags.map((item, i) => {
              return (
                <Button key={i} type="tag" isActive={i < 3}>
                  {item}
                </Button>
              );
            })}
          </div>
          <div className={styles.more}>
            <Button type="more">Show More</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SideBar;
