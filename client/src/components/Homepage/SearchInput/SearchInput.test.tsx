import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SearchInput from "./SearchInput";
import { DEBOUNCE_DELAY } from "constants/index";

// Mocking the useDebounce hook to bypass the debounce mechanism for testing
jest.mock("hooks/useDebounce", () => {
  return jest.fn((value) => value);
});

// Mock function for onSearchInputChange prop
const mockOnSearchInputChange = jest.fn();

// Test Suite for SearchInput Component
describe("SearchInput Component", () => {
  // Setup before each test case
  beforeEach(() => {
    jest.useFakeTimers(); // Fake timers to control the passage of time
  });

  // Cleanup after each test case
  afterEach(() => {
    jest.clearAllMocks();
    jest.runOnlyPendingTimers();
    jest.useRealTimers(); // Restore real timers
  });

  // Test Case 1: Renders the SearchInput component
  it("renders the SearchInput component", () => {
    // When rendering the SearchInput component
    render(<SearchInput onSearchInputChange={mockOnSearchInputChange} />);

    // Assertion
    const searchInput = screen.getByText("Search Keyword:");
    expect(searchInput).toBeInTheDocument();
  });

  // Test Case 2: Updates the query state on input change
  it("updates the query state on input change", () => {
    // When rendering the SearchInput component
    render(<SearchInput onSearchInputChange={mockOnSearchInputChange} />);

    // Get the search input element
    const searchInput = screen.getByLabelText("Search Keyword:");

    // Simulate input change
    fireEvent.change(searchInput, { target: { value: "test" } });

    // Assertion
    expect((searchInput as HTMLInputElement).value).toBe("test");
  });

  // Test Case 3: Calls onSearchInputChange with empty string if input is cleared
  it("calls onSearchInputChange with empty string if input is cleared", async () => {
    // When rendering the SearchInput component
    render(<SearchInput onSearchInputChange={mockOnSearchInputChange} />);

    // Get the search input element
    const searchInput = screen.getByLabelText("Search Keyword:");

    // Simulate input change with a non-empty value
    fireEvent.change(searchInput, { target: { value: "test" } });

    // Fast-forward time to debounce delay
    jest.advanceTimersByTime(DEBOUNCE_DELAY);

    // Simulate input change with an empty value
    fireEvent.change(searchInput, { target: { value: "" } });

    // Ensure that the onSearchInputChange is called with an empty string after clearing the input
    await waitFor(() => {
      expect(mockOnSearchInputChange).toHaveBeenCalledWith("");
    });
  });
});
