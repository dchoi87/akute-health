import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { CardChecklist, CheckLg, Trash } from "react-bootstrap-icons";

import SideBar from "./sidebar";
import Header from "./header";
import Pagination from "./pagination";
import Card from "./card";
import Button from "./common/button";
import Table from "./table";

import { useContainerQuery } from "./hooks";

import { useTasks } from "./context";
import { getTasks } from "./actions";

import styles from "./index.module.css";

const Tasks = () => {
  const { state, dispatch } = useTasks();
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);

  useEffect(() => {
    getTasks(dispatch);
  }, []);

  return (
    <div className={styles.tasks}>
      <SideBar isOpen={state.settings.sidebar} />
      <div
        className={classNames(styles.container, {
          [styles.overflowHidden]: state.settings.sidebar,
        })}
        ref={taskRef}
      >
        <div className={styles.content}>
          <Header />
          {!!state.tasks.selected.length && (
            <div className={styles.selected}>
              <div className={styles.selectedCount}>
                <CardChecklist />
                <span>
                  {state.tasks.selected.length} Task
                  {state.tasks.selected.length > 1 && "s"} Selected
                </span>
              </div>
              <div className={styles.selectedUtility}>
                <Button type="complete">
                  <CheckLg />
                </Button>
                <Button type="trash">
                  <Trash />
                </Button>
              </div>
            </div>
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
    </div>
  );
};

export default Tasks;
