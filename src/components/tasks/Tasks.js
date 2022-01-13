import React, { useRef } from 'react';
import Card from './Card';
import { useContainerQuery } from './hooks';

import './Tasks.css';

const Tasks = () => {
  const taskRef = useRef(null);
  const showDesktopView = useContainerQuery(taskRef);

  return (
    <div className="tasks" ref={taskRef}>
      <div className="tasks-header">
        <h1>Tasks</h1>
      </div>
      <div className="tasks-section">
        <div className="tasks-overview">
          Overview
        </div>
        <div className="tasks-filters">
          Filters
        </div>
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
  )
}

export default Tasks;