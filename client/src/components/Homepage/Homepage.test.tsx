import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "components/Homepage";
import useToast from "hooks/useToast";

// Mocking the useToast hook to isolate the component for testing
jest.mock("hooks/useToast");

// Test Suite for Homepage Component
describe("Homepage Component", () => {
  // Test Case: Homepage renders correctly on initial load
  test("Homepage renders correctly on initial load", () => {
    // Mocking the useToast hook's return value to provide a controlled environment
    (useToast as jest.Mock).mockReturnValue({
      showToast: jest.fn(),
    });

    // Rendering the Homepage component for testing
    render(<Homepage />);

    // Asserting the presence of the Wikipedia logo
    const wikipediaLogo = screen.getByAltText("wikipedia");
    expect(wikipediaLogo).toBeInTheDocument();

    // Asserting the presence of the title and subtitle
    const title = screen.getByText("Wikipedia");
    const subtitle = screen.getByText("The Free Encyclopedia");
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();

    // Asserting that the useToast hook was called during component rendering
    expect(useToast).toHaveBeenCalled();
  });
});
