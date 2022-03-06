import React from "react";
import { ChevronDown, SortDown, SortUp, Collection, CheckLg } from "react-bootstrap-icons";
import Button from "../common/button";
import Checkbox from "../common/checkbox";
import Input from "../common/input";

import styles from "./index.module.css";

import { tags, overview, priority, owner, status, sectionSvg } from "../data";

const Section = ({ children, title, id }) => {
  const svg = sectionSvg[id];
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
      <Section title="Overview" id="overview">
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
      <Section title="Sort" id="sort">
        <div className={styles.sort}>
          {/* todo: create data */}
          <Button type="sort" isActive={true}>
            <div className={styles.sortPriority}>1</div>
            <SortUp />
            <span>By Priority</span>
          </Button>
          <Button type="sort">
            <div className={styles.sortPriority}>2</div>
            <SortDown />
            <span>By Due Date</span>
          </Button>
        </div>
      </Section>
      <Section title="Saved Filters" id="filters">
        <div className={styles.filters}>
          <ul className={styles.filtersWrapper}>
            {/* todo: create data */}
            <li>
              <Button type="filter" isActive={true}>
                <span>Saved Filter 1 (10-12-22)</span>
                <CheckLg />
              </Button>
            </li>
            <li>
              <Button type="filter">
                <span>My Custom Filter (10-14-22)</span>
              </Button>
            </li>
            <li>
              <Button type="filter">
                <span>Superbowl Champs (11-22-22)</span>
              </Button>
            </li>
          </ul>
          <div className={styles.clear}>
            <Button type="clear">Clear Presets</Button>
          </div>
        </div>
      </Section>
      <Section title="Priority" id="priority">
        <div className={styles.priority}>
          {priority.map((item, i) => {
            return <Checkbox key={i} id={item} label={item} />;
          })}
        </div>
      </Section>
      <Section title="Owner" id="owner">
        <div className={styles.owner}>
          <div className={styles.toolbar}>
            <Input type="search" id="owner-search" placeholder="Search Owner" />
            <Button type="collection">
              <Collection />
            </Button>
          </div>
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
            <Button type="collection">
              <Collection />
            </Button>
          </div>
          <div className={styles.tagsWrapper}>
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
