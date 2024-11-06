/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import SmallCard from "./SmallCard";
import "@testing-library/jest-dom";

// Mock card data for testing
const mockCardData = {
  title: "Tasks",
  subtitle: "urgent",
  total: 42,
  color: "#f0f0f0",
  urgent: 5,
  textColor: "#ff0000",
};

describe("SmallCard Component", () => {
  it("renders title, total, and urgent information correctly", () => {
    render(<SmallCard card={mockCardData} />);

    // Check title is rendered
    const titleElement = screen.getByText(/tasks/i);
    expect(titleElement).toBeInTheDocument();

    // Check total is rendered
    const totalElement = screen.getByText(mockCardData.total.toString());
    expect(totalElement).toBeInTheDocument();

    // Check urgent and subtitle is rendered
    const urgentElement = screen.getByText(
      `${mockCardData.urgent} ${mockCardData.subtitle}`
    );
    expect(urgentElement).toBeInTheDocument();
  });

  it("applies background color and text color styles", () => {
    render(<SmallCard card={mockCardData} />);

    // Check background color
    const cardElement = screen.getByText(/tasks/i).closest("div");
    expect(cardElement).toHaveStyle(`background-color: ${mockCardData.color}`);

    // Check text color of the urgent subtitle
    const urgentElement = screen.getByText(
      `${mockCardData.urgent} ${mockCardData.subtitle}`
    );
    expect(urgentElement).toHaveStyle(`color: ${mockCardData.textColor}`);
  });
});
