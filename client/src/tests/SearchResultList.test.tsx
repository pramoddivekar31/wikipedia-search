import { render, screen } from "@testing-library/react";
import SearchResultList from "components/Homepage/SearchResultList";
import useSearch from "hooks/useSearch";

jest.mock("hooks/useSearch");

describe("SearchResultList component", () => {
  test("renders with search results", () => {
    (useSearch as jest.Mock).mockReturnValue({
      state: {
        searchList: [
          { title: "Result 1", pageid: 1 },
          { title: "Result 2", pageid: 2 },
          { title: "Result 3", pageid: 3 },
        ],
      },
    });

    render(<SearchResultList />);
    expect(screen.getByText("Result 1")).toBeInTheDocument();
    expect(screen.getByText("Result 2")).toBeInTheDocument();
    expect(screen.getByText("Result 3")).toBeInTheDocument();
  });

  test("renders with no search results", () => {
    (useSearch as jest.Mock).mockReturnValue({
      state: { searchList: [] },
    });

    render(<SearchResultList />);
    expect(
      screen.getByText(
        /Please enter a keyword to discover relevant information..!/i,
      ),
    ).toBeInTheDocument();
  });

  test("renders styles of VirtulizedListItem", () => {
    (useSearch as jest.Mock).mockReturnValue({
      state: { searchList: [{ title: "Result 1", pageid: 1 }] },
    });

    render(<SearchResultList />);
    expect(screen.getByText(/Result 1/i)).toHaveStyle("padding: 10px");
  });

  test("handles zero search results", () => {
    (useSearch as jest.Mock).mockReturnValue({
      state: { searchList: [] },
    });

    render(<SearchResultList />);
    expect(
      screen.getByText(
        /Please enter a keyword to discover relevant information..!/i,
      ),
    ).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
