import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders App component with ErrorBoundary and ToastContextProvider", () => {
    // Render the App component
    render(<App />);

    // Assert that the App component is rendered
    expect(screen.getByText("Wikipedia")).toBeInTheDocument();
  });
});
