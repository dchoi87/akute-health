import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import { PlusLg, ViewStacked, ViewList, Table, Search, Filter } from "react-bootstrap-icons";
import SideBar from "./sidebar";
import Card from "./card";
import Button from "./common/button";
import Input from "./common/input";

import { useContainerQuery } from "./hooks";
import { mockData } from "./data";

import styles from "./index.module.css";

const cx = classNames.bind(styles);

const Tasks = () => {
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);
  const [viewOption, setViewOption] = useState("comfortable");

  const handleViewOptions = ({ target }) => {
    setViewOption(target.id);
  };

  return (
    <div className={styles.tasks}>
      <SideBar />
      <div className={styles.container} ref={taskRef}>
        <div className={styles.utility}>
          <Button type="add">
            <PlusLg />
            <span>Add Task</span>
          </Button>
          <Button type="menu">
            <Filter />
          </Button>
          <div className={styles.search}>
            {
              showDesktopView ? (
                <Input type="search" id="tasks-search" placeholder="Search Tasks" />
              ) : (
                <Button type="search">
                  <Search />
                </Button>
              )
            }
            {/* todo: data & iterate */}
            <Button
              type="view"
              id="comfortable"
              isActive={viewOption === "comfortable"}
              onClick={handleViewOptions}
            >
              <ViewStacked />
            </Button>
            <Button
              type="view"
              id="compact"
              isActive={viewOption === "compact"}
              onClick={handleViewOptions}
            >
              <ViewList />
            </Button>
            <Button
              type="view"
              id="table"
              isActive={viewOption === "table"}
              onClick={handleViewOptions}
            >
              <Table />
            </Button>
          </div>
        </div>
        <div className={cx("cards", { compact: viewOption === "compact" })}>
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
    </div>
  );
};

export default Tasks;
