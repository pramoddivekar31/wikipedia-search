import ErrorBoundary from "common/ErrorBoundry";
import Homepage from "components/Homepage";
import SearchContextProvider from "context/SearchContextProvider";
import ToastContextProvider from "context/ToastContextProvider";

function App() {
  return (
    <ErrorBoundary>
      <SearchContextProvider>
        <ToastContextProvider>
          <Homepage />
        </ToastContextProvider>
      </SearchContextProvider>
    </ErrorBoundary>
  );
}

export default App;
