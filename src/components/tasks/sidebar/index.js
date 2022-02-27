import React from "react";
import { ChevronDown } from "react-bootstrap-icons";
import Button from "../common/button";
import Checkbox from "../common/checkbox";
import Input from "../common/input";

import styles from "./index.module.css";

import { tags, overview, priority, owner, status } from "../data";

const Section = ({ children, title }) => {
  return (
    <div className={styles.section}>
      <Button type="header">
        <span>{title}</span>
        <ChevronDown />
      </Button>
      {children}
    </div>
  );
};

const SideBar = () => {
  return (
    <div className={styles.container}>
      <Section title="Overview">
        <div className={styles.overview}>
          {overview.map((item, i) => {
            return (
              <Button key={i} type="overview">
                <span>{item.label}</span>
                <span className={styles.overviewCount}>{item.value}</span>
              </Button>
            );
          })}
        </div>
      </Section>
      <Section title="Priority">
        <div className={styles.priority}>
          {priority.map((item, i) => {
            return <Checkbox key={i} id={item} label={item} />;
          })}
        </div>
      </Section>
      <Section title="Owner">
        <div className={styles.owner}>
          <Input type="search" id="owner-search" placeholder="Search Owner" />
          <div className={styles.ownerWrapper}>
            {owner.map((item, i) => {
              return <Checkbox key={i} id={item} label={item} />;
            })}
          </div>
        </div>
      </Section>
      <Section title="Status">
        <div className={styles.status}>
          {status.map((item, i) => {
            return <Checkbox key={i} id={item} label={item} />;
          })}
        </div>
      </Section>
      <Section title="Tags">
        <div className={styles.tags}>
          <Input type="search" id="tags-search" placeholder="Search Tags" />
          <div className={styles.tagsWrapper}>
            {tags.map((item, i) => {
              return (
                <Button key={i} type="tag">
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SideBar;
