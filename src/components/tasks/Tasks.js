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
          <h1>Tasks</h1>
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