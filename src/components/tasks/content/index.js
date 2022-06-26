import React, { useState, useRef } from "react";
import classNames from "classnames";

import Header from "../header";
import SelectionBar from "../selection-bar";
import Card from "../card";
import Pagination from "../pagination";
import Table from "../table";

import { useTasks } from "../context";
import { useContainerQuery } from "../hooks";

import styles from "./index.module.css";

const Content = ({ sidebar, setSidebar }) => {
  const [state] = useTasks();
  const [view, setView] = useState("comfortable");
  const [sort, setSort] = useState("desc");
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
          setSort={setSort}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
        {!!state.tasks.selected.length && (
          <SelectionBar selectedCount={state.tasks.selected.length} />
        )}
        {view === "table" ? (
          <Table
            tasks={state.tasks.data}
            selectedItems={state.tasks.selected}
          />
        ) : (
          <div
            className={classNames(styles.cards, {
              [styles.compact]: view === "compact",
            })}
          >
            {state.tasks.data.map((task, i) => {
              return (
                <Card
                  key={i}
                  task={task}
                  showDesktopView={showDesktopView}
                  isCompactView={view === "compact"}
                  isSelected={state.tasks.selected.includes(task.id)}
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
