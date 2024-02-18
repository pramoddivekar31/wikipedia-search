import { render, screen } from "@testing-library/react";
import Homepage from "components/Homepage";
import useToast from "hooks/useToast";

jest.mock("hooks/useToast");

describe("Homepage Component", () => {
  test("Homepage renders correctly on initial load", () => {
    (useToast as jest.Mock).mockReturnValue({
      showToast: jest.fn(),
    });

    render(<Homepage />);

    const wikipediaLogo = screen.getByAltText("wikipedia");
    expect(wikipediaLogo).toBeInTheDocument();

    const title = screen.getByText("Wikipedia");
    const subtitle = screen.getByText("The Free Encyclopedia");
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();

    expect(useToast).toHaveBeenCalled();
  });
});
