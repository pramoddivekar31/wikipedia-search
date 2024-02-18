import { render, screen } from "@testing-library/react";
import SearchHistory from "components/Homepage/SearchHistory";

// Test Suite for the SearchHistory Component
describe("SearchHistory Component", () => {
  // Test Case 1: Renders with search history
  it("renders with search history", () => {
    // Given a list of search history
    const searchHistory: string[] = ["query1", "query2"];

    // When rendering the SearchHistory component with the provided search history
    render(<SearchHistory searchHistory={searchHistory} />);

    // Assertions
    expect(screen.getByText("Search History:")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(searchHistory.length);
  });

  // Test Case 2: Renders with empty search history
  it("renders with empty search history", () => {
    // Given an empty search history
    const searchHistory: string[] = [];

    // When rendering the SearchHistory component with an empty search history
    render(<SearchHistory searchHistory={searchHistory} />);

    // Assertions
    expect(
      screen.getByText("No search history available."),
    ).toBeInTheDocument();
  });

  // Test Case 3: Applies CSS classes correctly
  it("applies CSS classes correctly", () => {
    // Given a list of search history
    const searchHistory = ["query1", "query2"];

    // When rendering the SearchHistory component with the provided search history
    render(<SearchHistory searchHistory={searchHistory} />);

    // Assertions
    expect(screen.getByText("Search History:")).toHaveClass("history-label");
    expect(screen.getByRole("list")).toHaveClass("search-history-list");
    expect(screen.getAllByRole("listitem")[0]).toHaveClass(
      "search-history-item",
    );
  });
});
