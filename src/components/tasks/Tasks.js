import Card from './Card';

import './Tasks.css';

const Tasks = () => {
  return (
    <div className="tasks">
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
              <Card key={i} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Tasks;