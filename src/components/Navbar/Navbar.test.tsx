import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";

describe("Navbar Component", () => {
  it("renders the search input and button correctly", () => {
    render(<Navbar />);

    // Check if search input is rendered
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();

    // Check if search button is rendered
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeInTheDocument();
  });

  it("renders notification and message icons", () => {
    render(<Navbar />);

    // Check if notification icon is rendered
    const notificationIcon = screen.getByTestId("notification-icon");
    expect(notificationIcon).toBeInTheDocument();

    // Check if message icon is rendered
    const messageIcon = screen.getByTestId("message-icon");
    expect(messageIcon).toBeInTheDocument();
  });

  it("renders profile section with profile image and name", () => {
    render(<Navbar />);

    // Check if profile image is rendered
    const profileImage = screen.getByTestId("profile-image");
    expect(profileImage).toBeInTheDocument();

    // Check if profile name is rendered
    const profileName = screen.getByTestId("profile-name");
    expect(profileName).toBeInTheDocument();

    // Check if dropdown icon is rendered
    const dropdownIcon = screen.getByTestId("dropdown-icon");
    expect(dropdownIcon).toBeInTheDocument();
  });

  it("renders all profile icons and sections", () => {
    render(<Navbar />);

    // Check if profile section is rendered with correct elements
    const profileSection = screen.getByTestId("profile-section");
    expect(profileSection).toBeInTheDocument();
  });
});
