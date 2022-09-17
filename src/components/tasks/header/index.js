import React from "react";
import { PlusLg, Filter, SortDown, SortUp } from "react-bootstrap-icons";

import Button from "../common/button";
import Select from "../common/select";

import { useFiltersContext } from "../_context/filters";
import { useSort } from "../_hooks/useSort";
import { viewOptions, sortOptions } from "../constants";

import styles from "./index.module.css";

const Header = ({ view, setView, sidebar, setSidebar }) => {
  const [, dispatch_f] = useFiltersContext();
  const [sort, handleSort] = useSort(dispatch_f);

  const handleView = (value) => {
    setView(value);
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
                defaultValue={sortOptions.find(
                  (option) => option.value === sort.type
                )}
              />
              <Button
                type="sort"
                id="sortOrder"
                onClick={() => handleSort(sort.type)}
              >
                {sort.order === "desc" ? <SortDown /> : <SortUp />}
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
