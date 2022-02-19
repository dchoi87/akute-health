import React from "react";

import { ArrowsExpand, ArrowsCollapse } from "react-bootstrap-icons";

const ViewOptions = ({ handleViewOptions, viewOption }) => {
  return (
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
  );
};

export default ViewOptions;
