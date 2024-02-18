import { render, screen } from "@testing-library/react";
import SearchResultList from "./SearchResultList";

// Interface for defining the structure of search results
interface SearchResults {
  title: string;
  pageid: number;
}

// Test Suite for SearchResultList component
describe("SearchResultList component", () => {
  // Test Case 1: Renders with search results
  test("renders with search results", () => {
    // Arrange: Prepare search results data
    const searchResults = [
      { title: "Result 1", pageid: 1 },
      { title: "Result 2", pageid: 2 },
      { title: "Result 3", pageid: 3 },
    ];

    // Act: Render the SearchResultList component with the given data
    render(<SearchResultList searchResults={searchResults} />);

    // Assert: Check that the rendered component contains specific text content
    expect(screen.getByText("Result 1")).toBeInTheDocument();
    expect(screen.getByText("Result 2")).toBeInTheDocument();
    expect(screen.getByText("Result 3")).toBeInTheDocument();
  });

  // Test Case 2: Renders with no search results
  test("renders with no search results", () => {
    // Arrange: Render the SearchResultList component with an empty searchResults array
    render(<SearchResultList searchResults={[]} />);

    // Assert: Check that the appropriate message is rendered for no search results
    expect(
      screen.getByText(
        /Please enter a keyword to discover relevant information..!/i,
      ),
    ).toBeInTheDocument();
  });

  // Test Case 3: Renders styles of VirtulizedListItem
  test("renders styles of VirtulizedListItem", () => {
    // Arrange: Prepare search results data with one item
    const searchResults = [{ title: "Result 1", pageid: 1 }];

    // Act: Render the SearchResultList component with the given data
    render(<SearchResultList searchResults={searchResults} />);

    // Assert: Check that the rendered item has the expected style
    expect(screen.getByText(/Result 1/i)).toHaveStyle("padding: 10px");
  });

  // Test Case 4: Handles zero search results
  test("handles zero search results", () => {
    // Arrange: Render the SearchResultList component with an empty searchResults array
    const searchResults: SearchResults[] = [];
    render(<SearchResultList searchResults={searchResults} />);

    // Assert: Check that the appropriate message is rendered for no search results
    expect(
      screen.getByText(
        /Please enter a keyword to discover relevant information..!/i,
      ),
    ).toBeInTheDocument();
  });
});
