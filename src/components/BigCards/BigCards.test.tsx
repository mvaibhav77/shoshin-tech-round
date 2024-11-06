import { render, screen, waitFor } from "@testing-library/react";
import BigCards from "./BigCards";
import "@testing-library/jest-dom";

describe("BigCards", () => {
  const mockCardData = {
    title: "Total Employees",
    total: 240,
    men: 120,
    women: 96,
    image: "/images/employees.png",
    change: 2,
  };

  it("renders the title, total, and count correctly", () => {
    render(<BigCards card={mockCardData} />);

    // Check the card title
    const titleElement = screen.getByTestId("card-title");
    expect(titleElement).toHaveTextContent(mockCardData.title);

    // Check the card total
    const totalElement = screen.getByTestId("card-total");
    expect(totalElement).toHaveTextContent(mockCardData.total.toString());

    // Check the men count
    const menElement = screen.getByTestId("men-count");
    expect(menElement).toHaveTextContent(`${mockCardData.men} Men`);

    // Check the women count
    const womenElement = screen.getByTestId("women-count");
    expect(womenElement).toHaveTextContent(`${mockCardData.women} Women`);
  });

  it("displays the correct image", () => {
    render(<BigCards card={mockCardData} />);

    // Check if the image source contains the expected image path
    const imageElement = screen.getByTestId("card-image");
    expect(imageElement).toHaveAttribute(
      "src",
      expect.stringMatching(/url=%2Fimages%2Femployees.png/)
    );

    // Check if the alt text is correct
    expect(imageElement).toHaveAttribute("alt", mockCardData.title);
  });
});
