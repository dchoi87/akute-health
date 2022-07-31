import React, { useState, useRef } from "react";
import classNames from "classnames";
import moment from "moment";

import Header from "../header";
import SelectionBar from "../selection-bar";
import Card from "../card";
import Pagination from "../pagination";
import Table from "../table";

import { useFiltersContext } from "../context/filters";
import { useTasksContext } from "../context/tasks";
import { useContainerQuery } from "../hooks/useResize";
import { useTasksData } from "../hooks/useTasksData";
import { sorter } from "../helpers";

import styles from "./index.module.css";

const Content = ({ sidebar, setSidebar }) => {
  const [filters] = useFiltersContext();
  const [{ selected, sort, type }, dispatch] = useTasksContext();
  const { data: tasks } = useTasksData(filters);
  const [view, setView] = useState("comfortable");
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);

  return (
    <div
      className={classNames(styles.container, {
        [styles.overflowHidden]: sidebar,
      })}
      ref={taskRef}
    >
      <div className={styles.content}>
        <Header
          view={view}
          setView={setView}
          sort={sort}
          sidebar={sidebar}
          setSidebar={setSidebar}
          dispatch={dispatch}
        />
        {!!selected.length && <SelectionBar selectedCount={selected.length} />}
        {view === "table" ? (
          <Table tasks={tasks} selectedItems={selected} limit={filters.limit} />
        ) : (
          <div
            className={classNames(styles.cards, {
              [styles.compact]: view === "compact",
            })}
          >
            {tasks &&
              tasks
                .sort((a, b) => {
                  return sorter(a, b, sort, type);
                })
                .map((task, i) => {
                  return (
                    <Card
                      key={i}
                      task={task}
                      showDesktopView={showDesktopView}
                      isCompactView={view === "compact"}
                      isSelected={selected.includes(task.id)}
                    />
                  );
                })}
          </div>
        )}
        <Pagination page={filters.page} />
      </div>
    </div>
  );
};

export default Content;
