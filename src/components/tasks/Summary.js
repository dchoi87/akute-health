import React from 'react';

const Summary = () => {
  return (
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
  )
}

export default Summary;