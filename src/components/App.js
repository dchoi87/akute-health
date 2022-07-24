import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Tasks from "./tasks";

import { GlobalProvider } from "./tasks/context/global";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="app">
      <div className="nav">Navigation</div>
      <div className="container">
        <QueryClientProvider client={queryClient}>
          <GlobalProvider>
            <Tasks />
          </GlobalProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
