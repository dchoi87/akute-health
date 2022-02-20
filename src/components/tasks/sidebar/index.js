import React from "react";
import { ChevronDown } from "react-bootstrap-icons";
import Button from "../common/button";
import Checkbox from "../common/checkbox";
import Input from "../common/input";

import styles from "./index.module.css";

import { tags, overview, view, priority, owner, status } from "../data";

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

const SideBar = ({ handleViewOptions, viewOption }) => {
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
      <Section title="View Options">
        <div className={styles.view}>
          {view.map((item, i) => {
            return (
              <Button key={i} type="view">
                {item.svg}
                <span>{item.label}</span>
              </Button>
            );
          })}
        </div>
      </Section>
      <Section title="By Priority">
        <div className={styles.priority}>
          {priority.map((item, i) => {
            return <Checkbox key={i} id={item} label={item} />;
          })}
        </div>
      </Section>
      <Section title="By Owner">
        <div className={styles.owner}>
          {owner.map((item, i) => {
            return <Checkbox key={i} id={item} label={item} />;
          })}
        </div>
      </Section>
      <Section title="By Status">
        <div className={styles.status}>
          {status.map((item, i) => {
            return <Checkbox key={i} id={item} label={item} />;
          })}
        </div>
      </Section>
      <Section title="By Tags">
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
