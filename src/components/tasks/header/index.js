import React, { useState } from "react";
import { PlusLg, Filter, SortDown, SortUp } from "react-bootstrap-icons";

import Button from "../common/button";
import Select from "../common/select";

import { viewOptions, sortOptions } from "../constants";

import styles from "./index.module.css";

const Header = ({ view, setView, sidebar, setSidebar, dispatch }) => {
  const [sort, setSort] = useState({ priority: "desc" });
  const [type, setType] = useState("priority");

  const handleView = (value) => {
    setView(value);
  };

  const handleSort = ({ value, target }) => {
    const _value = value || target.id;
    let payload;

    if (_value === "sortOrder") {
      // set order
      const order = sort[type] === "asc" ? "desc" : "asc";
      payload = { ...sort, [type]: order };
    } else {
      // change type & order
      payload = Object.assign({ [_value]: sort[_value] || "desc" }, sort);
      setType(_value);
    }

    setSort(payload);
    dispatch({ type: "CHANGE_SORT", payload: payload });
  };

  const handleFilterMenu = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      {sidebar && (
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
              <Select
                options={sortOptions}
                placeholder="Sort By"
                onChange={handleSort}
              />
              <Button type="sort" id="sortOrder" onClick={handleSort}>
                {sort[type] === "desc" ? <SortDown /> : <SortUp />}
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
