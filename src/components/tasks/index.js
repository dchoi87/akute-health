import React, { useState, useRef } from "react";
import classNames from "classnames";
import { PlusLg } from "react-bootstrap-icons";
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
    setViewOption(target.dataset.id);
  };

  return (
    <div className={styles.tasks}>
      <SideBar handleViewOptions={handleViewOptions} viewOption={viewOption} />
      <div className={styles.container} ref={taskRef}>
        <div className={styles.utility}>
          <Button type="add">
            <PlusLg /> Add Task
          </Button>
          <div className="tasks-header__search">
            <Input type="search" id="tasks-search" placeholder="Search Tasks" />
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
