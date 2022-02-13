import React, { useState, useRef } from 'react';
import SideBar from './SideBar';
import Card from './Card';
import { useContainerQuery } from './hooks';

import './Tasks.css';

const Tasks = () => {
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);
  const [viewOption, setViewOption] = useState('comfortable');

  const handleViewOptions = ({target}) => {
    setViewOption(target.dataset.id);
  }

  return (
    <div className="tasks">
      <SideBar handleViewOptions={handleViewOptions} viewOption={viewOption} />
      <div className="tasks-container" ref={taskRef}>
        <div className="tasks-header">
          <button className="tasks-header__add-btn tasks__btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
            Add Task
          </button>
          <div className="tasks-header__search">
            <input type="search" name="tasks-search" id="tasks-search" placeholder="Search Tasks" />
          </div>
        </div>
        <div className={`tasks-cards tasks-cards--${viewOption}`}>
          {
            Array(25).fill().map((el, i) => {
              return (
                <Card key={i} showDesktopView={showDesktopView} viewOption={viewOption} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Tasks;