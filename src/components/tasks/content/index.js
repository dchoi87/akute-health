import React, { useRef } from "react";
import classNames from "classnames";

import Header from "../header";
import SelectionBar from "../selection-bar";
import Card from "../card";
import Pagination from "../pagination";
import Table from "../table";

import { useTasks } from "../context";
import { useContainerQuery } from "../hooks";

import styles from "./index.module.css";

const Content = () => {
  const [state, dispatch] = useTasks();
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);

  return (
    <div
      className={classNames(styles.container, {
        [styles.overflowHidden]: state.settings.sidebar,
      })}
      ref={taskRef}
    >
      <div className={styles.content}>
        <Header />
        {!!state.tasks.selected.length && (
          <SelectionBar selectedCount={state.tasks.selected.length} />
        )}
        {state.settings.view === "table" ? (
          <Table
            tasks={state.tasks.data}
            selectedItems={state.tasks.selected}
          />
        ) : (
          <div
            className={classNames(styles.cards, {
              [styles.compact]: state.settings.view === "compact",
            })}
          >
            {state.tasks.data.map((task, i) => {
              return (
                <Card
                  key={i}
                  task={task}
                  showDesktopView={showDesktopView}
                  isCompactView={state.settings.view === "compact"}
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
