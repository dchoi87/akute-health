import React, { useRef } from 'react';
import SideBar from './SideBar';
import Card from './Card';
import { useContainerQuery } from './hooks';

import './Tasks.css';

const Tasks = () => {
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);

  return (
    <div className="tasks">
      <SideBar />
      <div className="tasks-container" ref={taskRef}>
        <div className="tasks-header">
          <h1>Tasks</h1>
        </div>
        <div className="tasks-cards">
          {
            Array(15).fill().map((el, i) => {
              return (
                <Card key={i} showDesktopView={showDesktopView} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Tasks;