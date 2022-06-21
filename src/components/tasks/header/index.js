import React, { useState } from "react";
import { PlusLg, Filter } from "react-bootstrap-icons";

import Button from "../common/button";
import Select from "../common/select";
import { useTasks } from "../context";

import { view, sort } from "../data";

import styles from "./index.module.css";

const Header = () => {
  const [state, dispatch] = useTasks();

  const handleViewOptions = ({ target }) => {
    dispatch({ type: "change_view", payload: target.id });
  };

  const handleSortOrder = () => {
    const sort = state.settings.sort === "desc" ? "asc" : "desc";
    dispatch({ type: "change_sort", payload: sort });
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
          {state.settings.view !== "table" && (
            <Select
              type="sort"
              options={sort}
              placeholder="Sort By"
              handleSortOrder={handleSortOrder}
              isDesc={state.settings.sort === "desc"}
            />
          )}
          <div className={styles.view}>
            {view.map((item, i) => {
              return (
                <Button
                  key={i}
                  type="view"
                  id={item.id}
                  isActive={state.settings.view === item.id}
                  onClick={handleViewOptions}
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
