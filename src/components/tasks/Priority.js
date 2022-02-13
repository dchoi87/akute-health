import React from 'react';

const Priority = () => {
  return (
    <div className="tasks-priority">
      <div className="tasks-priority__checkbox">
        <input type="checkbox" />
        <span>No Priority</span>
      </div>
      <div className="tasks-priority__checkbox">
        <input type="checkbox" />
        <span>P2</span>
      </div>
      <div className="tasks-priority__checkbox">
        <input type="checkbox" />
        <span>P3</span>
      </div>
      <div className="tasks-priority__checkbox">
        <input type="checkbox" />
        <span>Urgent</span>
      </div>
    </div>
  )
}

export default Priority;