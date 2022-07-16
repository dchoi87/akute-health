import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import Header from "../header";
import SelectionBar from "../selection-bar";
import Card from "../card";
import Pagination from "../pagination";
import Table from "../table";

import { useTasks } from "../context/tasks";
import { getTasks, getTemp } from "../actions";
import { useContainerQuery } from "../hooks";

import styles from "./index.module.css";

const Content = ({ sidebar, setSidebar }) => {
  const [tasks, dispatch] = useTasks();
  const [view, setView] = useState("comfortable");
  const [sort, setSort] = useState("desc");
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);

  useEffect(() => {
    console.log("fetching data...");
    getTasks(dispatch);
    // send global dispatch
    getTemp(dispatch);
  }, []);

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
        {!!tasks.selected.length && (
          <SelectionBar selectedCount={tasks.selected.length} />
        )}
        {view === "table" ? (
          <Table tasks={tasks.data} selectedItems={tasks.selected} />
        ) : (
          <div
            className={classNames(styles.cards, {
              [styles.compact]: view === "compact",
            })}
          >
            {tasks.data.map((task, i) => {
              return (
                <Card
                  key={i}
                  task={task}
                  showDesktopView={showDesktopView}
                  isCompactView={view === "compact"}
                  isSelected={tasks.selected.includes(task.id)}
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
