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
import { mockData, view, sort } from "./data";

import styles from "./index.module.css";

const Tasks = () => {
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);
  const [viewOption, setViewOption] = useState("comfortable");
  const [isDesc, setSortOrder] = useState(true);
  const [isOpen, setFilterVisibility] = useState(false);
  const [selectedItems, setSelected] = useState([]);
  const [visibleTasks, setVisibleTasks] = useState([]);
  const isCompactView = viewOption === "compact";
  const isTableView = viewOption === "table";

  useEffect(() => {
    const tasks = mockData.map((item) => item.id);
    setVisibleTasks(tasks);
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

  const handleSelectItem = ({ currentTarget }) => {
    const id = currentTarget.dataset.id;

    if (id === "all") {
      // note: logic will need to change to be tasks visible per page
      if (selectedItems.length !== visibleTasks.length) {
        setSelected(visibleTasks);
      } else {
        setSelected([]);
      }
      return;
    }

    if (selectedItems.includes(id)) {
      setSelected(selectedItems.filter((item) => item !== id));
    } else {
      setSelected([...selectedItems, id]);
    }
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
          {!!selectedItems.length && (
            <div className={styles.selected}>
              <div className={styles.selectedCount}>
                <CardChecklist />
                <span>
                  {selectedItems.length} Task{selectedItems.length > 1 && "s"}{" "}
                  Selected
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
              data={mockData}
              selectedItems={selectedItems}
              handleSelectItem={handleSelectItem}
              allSelected={selectedItems.length === visibleTasks.length}
            />
          ) : (
            <div
              className={classNames(styles.cards, {
                [styles.compact]: isCompactView,
              })}
            >
              {mockData.map((task, i) => {
                return (
                  <Card
                    key={i}
                    task={task}
                    showDesktopView={showDesktopView}
                    isCompactView={isCompactView}
                    isSelected={selectedItems.includes(task.id)}
                    handleSelectItem={handleSelectItem}
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
