import React from "react";
import { ChevronDown, SortDown, SortUp } from "react-bootstrap-icons";
import Button from "../common/button";
import Checkbox from "../common/checkbox";
import Input from "../common/input";

import styles from "./index.module.css";

import { tags, overview, priority, owner, status, sectionSvg } from "../data";

const Section = ({ children, title }) => {
  const svg = sectionSvg[title.toLowerCase()];
  return (
    <div className={styles.section}>
      <Button type="header">
        {svg}
        <div className={styles.header}>
          <span>{title}</span>
          <ChevronDown />
        </div>
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
              <Button key={i} type="overview" isActive={i === 0}>
                <span className={styles.overviewCount}>{item.value}</span>
                <span>{item.label}</span>
              </Button>
            );
          })}
        </div>
      </Section>
      <Section title="Sort">
        <div className={styles.sort}>
          <Button type="sort">
            <SortDown />
            <span>By Priority</span>
          </Button>
          <Button type="sort">
            <SortDown />
            <span>By Due Date</span>
          </Button>
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
          <div className={styles.more}>
            <Button type="more">Show More</Button>
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
          <div className={styles.more}>
            <Button type="more">Show More</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SideBar;
