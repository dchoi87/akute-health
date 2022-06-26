import React, { useState } from "react";
import { PlusLg, Filter, SortDown, SortUp } from "react-bootstrap-icons";

import Button from "../common/button";
import Select from "../common/select";
import { useTasks } from "../context";

import { viewOptions, sortOptions } from "../data";

import styles from "./index.module.css";

const Header = ({ view, setView, sort, setSort }) => {
  const [state, dispatch] = useTasks();

  const handleView = (value) => {
    setView(value);
  };

  const handleSortOrder = () => {
    const value = sort === "desc" ? "asc" : "desc";
    setSort(value);
  };

  const handleFilterMenu = () => {
    dispatch({ type: "show_sidebar", payload: !state.settings.sidebar });
  };

  return (
    <>
      {state.settings.sidebar && (
        <div className={styles.overlay} onClick={handleFilterMenu}></div>
      )}
      <div className={styles.header}>
        <Button type="add">
          <PlusLg />
          <span>Add Task</span>
        </Button>
        <Button type="filters" onClick={handleFilterMenu}>
          <Filter />
        </Button>
        <div className={styles.tools}>
          {view !== "table" && (
            <div className={styles.select}>
              <Select options={sortOptions} placeholder="Sort By" />
              <Button type="sort" onClick={handleSortOrder}>
                {sort === "desc" ? <SortDown /> : <SortUp />}
              </Button>
            </div>
          )}
          <div className={styles.view}>
            {viewOptions.map((item, i) => {
              return (
                <Button
                  key={i}
                  type="view"
                  id={item.id}
                  isActive={view === item.id}
                  onClick={() => handleView(item.id)}
                >
                  {item.svg}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
