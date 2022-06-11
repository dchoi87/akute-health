import Tasks from "./tasks";
import { TasksProvider } from "./tasks/context";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="nav">Navigation</div>
      <div className="container">
        <TasksProvider>
          <Tasks />
        </TasksProvider>
      </div>
    </div>
  );
}

export default App;
