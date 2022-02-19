import React from "react";

const Status = () => {
  return (
    <div className="tasks-status">
      <div className="tasks-status__checkbox">
        <input type="checkbox" />
        <span>Complete</span>
      </div>
      <div className="tasks-status__checkbox">
        <input type="checkbox" />
        <span>In Progress</span>
      </div>
      <div className="tasks-status__checkbox">
        <input type="checkbox" />
        <span>No Status</span>
      </div>
      <div className="tasks-status__checkbox">
        <input type="checkbox" />
        <span>Not Started</span>
      </div>
    </div>
  );
};

export default Status;
