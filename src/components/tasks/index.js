import React, { useState, useRef } from "react";
import classNames from "classnames";
import { PlusLg, ViewStacked, ViewList } from "react-bootstrap-icons";
import SideBar from "./sidebar";
import Card from "./card";
import Button from "./common/button";
import Input from "./common/input";

import { useContainerQuery } from "./hooks";

import styles from "./index.module.css";

const Tasks = () => {
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);
  const [viewOption, setViewOption] = useState("comfortable");

  const handleViewOptions = ({ target }) => {
    console.log("hello!", target.id);
    setViewOption(target.id);
  };

  return (
    <div className={styles.tasks}>
      <SideBar />
      <div className={styles.container} ref={taskRef}>
        <div className={styles.utility}>
          <Button type="add">
            <PlusLg /> Add Task
          </Button>
          <div className={styles.search}>
            <Input type="search" id="tasks-search" placeholder="Search Tasks" />
            <Button type="view" isActive={true}>
              <ViewStacked />
            </Button>
            <Button type="view">
              <ViewList />
            </Button>
          </div>
        </div>
        <div className={styles.cards}>
          {Array(25)
            .fill()
            .map((el, i) => {
              return (
                <Card
                  key={i}
                  showDesktopView={showDesktopView}
                  viewOption={viewOption}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
