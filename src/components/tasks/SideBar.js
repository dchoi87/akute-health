import React from 'react';
import Summary from './Summary';
import ViewOptions from './ViewOptions';
import Priority from './Priority';
import Tags from './Tags';
import Owner from './Owner';
import Status from './Status';

import { ChevronDown } from 'react-bootstrap-icons';

const SideBar = ({handleViewOptions, viewOption}) => {
  return (
    <div className="tasks-sidebar">
      <div className="tasks-sidebar__section">
        <div className="tasks-sidebar__header">
          <span>Overview</span>
          <ChevronDown />
        </div>
        <Summary />
      </div>
      <div className="tasks-sidebar__section">
        <div className="tasks-sidebar__header">
          <span>View Options</span>
          <ChevronDown />
        </div>
        <ViewOptions handleViewOptions={handleViewOptions} viewOption={viewOption} />
      </div>
      <div className="tasks-sidebar__section">
        <div className="tasks-sidebar__header">
          <span>By Priority</span>
          <ChevronDown />
        </div>
        <Priority />
      </div>
      <div className="tasks-sidebar__section">
        <div className="tasks-sidebar__header">
          <span>By Owner</span>
          <ChevronDown />
        </div>
        <Owner />
      </div>
      <div className="tasks-sidebar__section">
        <div className="tasks-sidebar__header">
          <span>By Status</span>
          <ChevronDown />
        </div>
        <Status />
      </div>
      <div className="tasks-sidebar__section">
        <div className="tasks-sidebar__header">
          <span>By Tags</span>
          <ChevronDown />
        </div>
        <Tags />
      </div>
    </div>
  )
}

export default SideBar;