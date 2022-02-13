import React from 'react';
import Summary from './Summary';
import ViewOptions from './ViewOptions';
import Priority from './Priority';
import Tags from './Tags';
import Owner from './Owner';
import Status from './Status';

import { ChevronDown } from 'react-bootstrap-icons';

// Features:
// * expand / minimize all
// * save settings (toggle?)

const SideBar = ({handleViewOptions, viewOption}) => {
  return (
    <div className="tasks-sidebar">
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>Overview</span>
          <ChevronDown />
        </button>
        <Summary />
      </div>
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>View Options</span>
          <ChevronDown />
        </button>
        <ViewOptions handleViewOptions={handleViewOptions} viewOption={viewOption} />
      </div>
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>By Priority</span>
          <ChevronDown />
        </button>
        <Priority />
      </div>
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>By Owner</span>
          <ChevronDown />
        </button>
        <Owner />
      </div>
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>By Status</span>
          <ChevronDown />
        </button>
        <Status />
      </div>
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>By Tags</span>
          <ChevronDown />
        </button>
        <Tags />
      </div>
    </div>
  )
}

export default SideBar;