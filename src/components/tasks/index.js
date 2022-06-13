import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import {
  PlusLg,
  Filter,
  CardChecklist,
  CheckLg,
  Trash,
} from "react-bootstrap-icons";
import SideBar from "./sidebar";
import Pagination from "./pagination";
import Card from "./card";
import Button from "./common/button";
import Select from "./common/select";
import Table from "./table";

import { useContainerQuery } from "./hooks";
import { view, sort } from "./data";

import { useTasks } from "./context";
import { getTasks } from "./actions";

import styles from "./index.module.css";

const Tasks = () => {
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);
  // view
  const [viewOption, setViewOption] = useState("comfortable");
  const isCompactView = viewOption === "compact";
  const isTableView = viewOption === "table";
  // order
  const [isDesc, setSortOrder] = useState(true);
  // sidebar
  const [isOpen, setFilterVisibility] = useState(false);

  const { state, dispatch } = useTasks();

  useEffect(() => {
    getTasks(dispatch);
  }, []);

  const handleViewOptions = ({ target }) => {
    setViewOption(target.id);
  };

  const handleSortOrder = () => {
    setSortOrder(!isDesc);
  };

  const handleFilterMenu = () => {
    setFilterVisibility(!isOpen);
  };

  return (
    <div className={styles.tasks}>
      <SideBar isOpen={isOpen} />
      <div
        className={classNames(styles.container, {
          [styles.overflowHidden]: isOpen,
        })}
        ref={taskRef}
      >
        {isOpen && (
          <div className={styles.overlay} onClick={handleFilterMenu}></div>
        )}
        <div className={styles.content}>
          <div className={styles.utility}>
            <Button type="add">
              <PlusLg />
              <span>Add Task</span>
            </Button>
            <Button type="filters" onClick={handleFilterMenu}>
              <Filter />
            </Button>
            <div className={styles.tools}>
              {!isTableView && (
                <Select
                  type="sort"
                  options={sort}
                  placeholder="Sort By"
                  handleSortOrder={handleSortOrder}
                  isDesc={isDesc}
                />
              )}
              <div className={styles.view}>
                {view.map((item, i) => {
                  return (
                    <Button
                      key={i}
                      type="view"
                      id={item.id}
                      isActive={viewOption === item.id}
                      onClick={handleViewOptions}
                    >
                      {item.svg}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
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
          {isTableView ? (
            <Table
              tasks={state.tasks.data}
              selectedItems={state.tasks.selected}
            />
          ) : (
            <div
              className={classNames(styles.cards, {
                [styles.compact]: isCompactView,
              })}
            >
              {state.tasks.data.map((task, i) => {
                return (
                  <Card
                    key={i}
                    task={task}
                    showDesktopView={showDesktopView}
                    isCompactView={isCompactView}
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
