import React, { useState, useRef } from "react";
import classNames from "classnames";
import { PlusLg, Filter, SortDown, SortUp } from "react-bootstrap-icons";
import SideBar from "./sidebar";
import Pagination from "./pagination";
import Card from "./card";
import Button from "./common/button";
import Select from "./common/select";

import { useContainerQuery } from "./hooks";
import { mockData, view } from "./data";

import styles from "./index.module.css";

const Tasks = () => {
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);
  const [viewOption, setViewOption] = useState("comfortable");
  const [isDesc, setSortOrder] = useState(true);

  const handleViewOptions = ({ target }) => {
    setViewOption(target.id);
  };

  const handleSortOrder = () => {
    setSortOrder(!isDesc);
  };

  return (
    <div className={styles.tasks}>
      <SideBar />
      <div className={styles.container} ref={taskRef}>
        <div className={styles.content}>
          <div className={styles.utility}>
            <Button type="add">
              <PlusLg />
              <span>Add Task</span>
            </Button>
            <Button type="filters">
              <Filter />
            </Button>
            <div className={styles.tools}>
              <div className={styles.priority}>
                <Select />
                <Button type="sort" onClick={handleSortOrder}>
                  {isDesc ? <SortDown /> : <SortUp />}
                </Button>
              </div>
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
          <div
            className={classNames(styles.cards, {
              [styles.compact]: viewOption === "compact",
            })}
          >
            {mockData.map((task, i) => {
              return (
                <Card
                  key={i}
                  task={task}
                  showDesktopView={showDesktopView}
                  isCompactView={viewOption === "compact"}
                />
              );
            })}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Tasks;
