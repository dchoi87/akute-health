import React from "react";

import {
  ChevronDown,
  ArrowsExpand,
  ArrowsCollapse,
} from "react-bootstrap-icons";

const tags = [
  "assessments",
  "create new",
  "create tags",
  "diagnostic report",
  "doc review",
  "fax",
  "form submission",
  "health maintenance",
  "new patient signup",
  "support",
];

const SideBar = ({ handleViewOptions, viewOption }) => {
  return (
    <div className="tasks-sidebar">
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>Overview</span>
          <ChevronDown />
        </button>
        {/* start */}
        <div className="tasks-summary">
          <button className="tasks-summary__status tasks__btn tasks__btn--selected">
            <div className="tasks-summary__title">Today</div>
            <span className="tasks-summary__count">5</span>
          </button>
          <button className="tasks-summary__status tasks__btn">
            <div className="tasks-summary__title">Next 5 Days</div>
            <span className="tasks-summary__count">9</span>
          </button>
          <button className="tasks-summary__status tasks__btn">
            <div className="tasks-summary__title">Incomplete</div>
            <span className="tasks-summary__count">25</span>
          </button>
          <button className="tasks-summary__status tasks__btn">
            <div className="tasks-summary__title">Completed</div>
            <span className="tasks-summary__count">57</span>
          </button>
        </div>
        {/* end */}
      </div>
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>View Options</span>
          <ChevronDown />
        </button>
        {/* start */}
        <div className="tasks-view">
          <button
            className={
              "tasks-view__option tasks__btn" +
              (viewOption === "comfortable" ? " tasks__btn--selected" : "")
            }
            onClick={handleViewOptions}
            data-id="comfortable"
          >
            <ArrowsExpand />
            <span>Comfortable</span>
          </button>
          <button
            className={
              "tasks-view__option tasks__btn" +
              (viewOption === "compact" ? " tasks__btn--selected" : "")
            }
            onClick={handleViewOptions}
            data-id="compact"
          >
            <ArrowsCollapse />
            <span>Compact</span>
          </button>
        </div>
        {/* end */}
      </div>
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>By Priority</span>
          <ChevronDown />
        </button>
        {/* start */}
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
        {/* end */}
      </div>
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>By Owner</span>
          <ChevronDown />
        </button>
        {/* start */}
        <div className="tasks-owner">
          <div className="tasks-owner__checkbox">
            <input type="checkbox" />
            <span>Austin Ekeler</span>
          </div>
          <div className="tasks-owner__checkbox">
            <input type="checkbox" />
            <span>Najee Harris</span>
          </div>
          <div className="tasks-owner__checkbox">
            <input type="checkbox" />
            <span>DK Metcalf</span>
          </div>
          <div className="tasks-owner__checkbox">
            <input type="checkbox" />
            <span>Diontae Johnson</span>
          </div>
          <div className="tasks-owner__checkbox">
            <input type="checkbox" />
            <span>Kyler Murray</span>
          </div>
          <div className="tasks-owner__checkbox">
            <input type="checkbox" />
            <span>Dawson Knox</span>
          </div>
          <div className="tasks-owner__checkbox">
            <input type="checkbox" />
            <span>Marquez Valdes-Scantling</span>
          </div>
        </div>
        {/* end */}
      </div>
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>By Status</span>
          <ChevronDown />
        </button>
        {/* start */}
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
        {/* end */}
      </div>
      <div className="tasks-sidebar__section">
        <button className="tasks-sidebar__header tasks__btn">
          <span>By Tags</span>
          <ChevronDown />
        </button>
        {/* start */}
        <div className="tasks-tags">
          <div className="tasks-tags__search">
            {/* <label htmlFor="tasks-search" className="visually-hidden">Search Tags</label> */}
            <input type="search" id="tasks-search" placeholder="Search Tags" />
          </div>
          <div className="tasks-tags__wrapper">
            {tags.map((tag, i) => {
              const temp = i < 2;
              return (
                <button
                  key={i}
                  className={
                    "tasks-tags__tag tasks__btn" +
                    (temp ? " tasks__btn--selected" : "")
                  }
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default SideBar;
