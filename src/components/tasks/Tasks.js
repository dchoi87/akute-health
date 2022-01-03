import Card from './Card';

import './Tasks.css';

const Tasks = () => {
  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h1>Tasks</h1>
      </div>
      <div className="tasks-overview">
        
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