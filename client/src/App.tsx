import ErrorBoundary from "common/ErrorBoundry";
import Homepage from "components/Homepage";
import ToastContextProvider from "context/ToastContextProvider";

function App() {
  return (
    <ErrorBoundary>
      <ToastContextProvider>
        <Homepage />
      </ToastContextProvider>
    </ErrorBoundary>
  );
}

export default App;
