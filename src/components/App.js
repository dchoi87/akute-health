import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Tasks from "./tasks";

import { FiltersProvider } from "./tasks/context/filters";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="app">
      <div className="nav">Navigation</div>
      <div className="container">
        <QueryClientProvider client={queryClient}>
          <FiltersProvider>
            <Tasks />
          </FiltersProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
