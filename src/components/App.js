import Tasks from "./tasks";

import { GlobalProvider } from "./tasks/context/global";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="nav">Navigation</div>
      <div className="container">
        <GlobalProvider>
          <Tasks />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
