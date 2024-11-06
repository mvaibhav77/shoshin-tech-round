/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { MAIN_MENU_ITEMS, OTHER_MENU_ITEMS } from "@/lib/utils";
import "@testing-library/jest-dom";

describe("Sidebar", () => {
  it("renders the sidebar with the correct structure", () => {
    render(<Sidebar />);

    // Check if the logo is displayed
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();

    // Check if the main menu and other menu headings are displayed
    const mainMenuHeading = screen.getByLabelText("main menu");
    const otherMenuHeading = screen.getByLabelText("other menu");
    expect(mainMenuHeading).toBeInTheDocument();
    expect(otherMenuHeading).toBeInTheDocument();
  });

  it("renders all main menu items with correct titles", () => {
    render(<Sidebar />);

    MAIN_MENU_ITEMS.forEach((item) => {
      const menuItem = screen.getByTestId(
        `main-menu-item-${item.title.toLowerCase().replace(/\s+/g, "-")}`
      );
      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toHaveTextContent(item.title);
    });
  });

  it("renders all other menu items with correct titles", () => {
    render(<Sidebar />);

    OTHER_MENU_ITEMS.forEach((item) => {
      const menuItem = screen.getByTestId(
        `main-menu-item-${item.title.toLowerCase().replace(/\s+/g, "-")}`
      );
      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toHaveTextContent(item.title);
    });
  });

  it("highlights the active menu item when clicked", () => {
    render(<Sidebar />);

    MAIN_MENU_ITEMS.forEach((item) => {
      const menuItem = screen.getByTestId(
        `main-menu-item-${item.title.toLowerCase().replace(/\s+/g, "-")}`
      );
      fireEvent.click(menuItem);

      // Check that the clicked item is highlighted
      expect(menuItem).toHaveClass("text-secondary");

      // Ensure no other item is active
      MAIN_MENU_ITEMS.filter((i) => i.title !== item.title).forEach(
        (otherItem) => {
          const otherMenuItem = screen.getByTestId(
            `main-menu-item-${otherItem.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`
          );
          expect(otherMenuItem).not.toHaveClass("text-secondary");
        }
      );
    });
  });

  it("changes active menu state correctly when different items are clicked", () => {
    render(<Sidebar />);

    // Click the first menu item and verify it's active
    const firstMenuItem = screen.getByTestId(
      `main-menu-item-${MAIN_MENU_ITEMS[0].title
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );
    fireEvent.click(firstMenuItem);
    expect(firstMenuItem).toHaveClass("text-secondary");

    // Click the second menu item and verify it becomes active instead
    const secondMenuItem = screen.getByTestId(
      `main-menu-item-${MAIN_MENU_ITEMS[1].title
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );
    fireEvent.click(secondMenuItem);
    expect(secondMenuItem).toHaveClass("text-secondary");

    // Ensure the first item is no longer active
    expect(firstMenuItem).not.toHaveClass("text-secondary");
  });
});
