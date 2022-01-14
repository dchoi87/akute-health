import React, { useRef } from 'react';
import Summary from './Summary';
import Filters from './Filters';
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
      <div className={"tasks-section" + (showDesktopView ? ' tasks-section--desktop' : '')}>
        <Summary />
        <Filters />
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