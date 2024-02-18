import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { DEBOUNCE_DELAY } from "constants/index";
import SearchInput from "components/Homepage/SearchInput";

jest.mock("hooks/useDebounce", () => jest.fn((value) => value));

const mockOnSearchInputChange = jest.fn();

describe("SearchInput Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders the SearchInput component", () => {
    render(<SearchInput onSearchInputChange={mockOnSearchInputChange} />);
    const searchInput = screen.getByText("Search Keyword:");
    expect(searchInput).toBeInTheDocument();
  });

  it("updates the query state on input change", () => {
    render(<SearchInput onSearchInputChange={mockOnSearchInputChange} />);
    const searchInput = screen.getByLabelText("Search Keyword:");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect((searchInput as HTMLInputElement).value).toBe("test");
  });

  it("calls onSearchInputChange with empty string if input is cleared", async () => {
    render(<SearchInput onSearchInputChange={mockOnSearchInputChange} />);
    const searchInput = screen.getByLabelText("Search Keyword:");
    fireEvent.change(searchInput, { target: { value: "test" } });
    jest.advanceTimersByTime(DEBOUNCE_DELAY);
    fireEvent.change(searchInput, { target: { value: "" } });
    await waitFor(() => {
      expect(mockOnSearchInputChange).toHaveBeenCalledWith("");
    });
  });
});
