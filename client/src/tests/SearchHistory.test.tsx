import { render, screen } from "@testing-library/react";
import SearchHistory from "components/Homepage/SearchHistory";
import useSearch from "hooks/useSearch";

jest.mock("hooks/useSearch");

describe("SearchHistory Component", () => {
  test("renders with search history", () => {
    (useSearch as jest.Mock).mockReturnValueOnce({
      state: { history: ["query1", "query2"] },
    });

    render(<SearchHistory />);
    expect(screen.getByText("Search History:")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  test("renders with empty search history", () => {
    (useSearch as jest.Mock).mockReturnValueOnce({
      state: { history: [] },
    });

    render(<SearchHistory />);
    expect(
      screen.getByText("No search history available."),
    ).toBeInTheDocument();
  });

  test("applies CSS classes correctly", () => {
    (useSearch as jest.Mock).mockReturnValueOnce({
      state: { history: ["query1", "query2"] },
    });

    render(<SearchHistory />);
    expect(screen.getByText("Search History:")).toHaveClass("history-label");
    expect(screen.getAllByRole("listitem")[0]).toHaveClass(
      "search-history-item",
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
