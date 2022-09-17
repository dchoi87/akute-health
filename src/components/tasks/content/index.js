import React, { useState, useRef } from "react";
import classNames from "classnames";

import Header from "../header";
import SelectionBar from "../selection-bar";
import Card from "../card";
import Pagination from "../pagination";
import Table from "../table";

import { useFiltersContext } from "../_context/filters";
import { useTasksContext } from "../_context/tasks";
import { useContainerQuery } from "../_hooks/useResize";
import { useTasksData } from "../_hooks/useTasksData";

import styles from "./index.module.css";

const Content = ({ sidebar, setSidebar }) => {
  const [filters] = useFiltersContext();
  const [{ selected }] = useTasksContext();
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
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
        {!!selected.length && (
          <SelectionBar
            tasks={tasks}
            isTableView={view === "table"}
            limit={filters.limit}
          />
        )}
        {view === "table" ? (
          <Table />
        ) : (
          <div
            className={classNames(styles.cards, {
              [styles.compact]: view === "compact",
            })}
          >
            {tasks &&
              tasks.data.map((task, i) => {
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
        <Pagination />
      </div>
    </div>
  );
};

export default Content;
