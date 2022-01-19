/*
What to show:
Priority
Owner
Status
Tags
*/

const Filters = () => {
  return (
    <div className="tasks-filters">
      <div className="tasks-filters__section--top">
        <div className="tasks-filters__title">Filter By</div>
        <div className="tasks-filters__search"></div>
      </div>
      <div className="tasks-filters__section--bottom">
        <Dropdown label="Priority" shouldShow={false} />
        <Dropdown label="Owner"/>
        <Dropdown label="Status"/>
        <Dropdown label="Tags"/>
      </div>
    </div>
  )
}

const Dropdown = ({label, shouldShow}) => {
  return (
    <div className="tasks-filters__dropdown">
      <div className="tasks-filters__label">
        <span>{label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
      </div>
      {
        shouldShow &&
        <div className="tasks-filters__select">
          <div className="tasks-filters__option">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            </svg>
            <span>Option 1</span>
          </div>
          <div className="tasks-filters__option">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            </svg>
            <span>Option 2</span>
          </div>
          <div className="tasks-filters__option">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            </svg>
            <span>Option 3</span>
          </div>
        </div>
      }
    </div>
  )
}

export default Filters;