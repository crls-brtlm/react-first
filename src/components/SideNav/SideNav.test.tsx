import { render, screen, fireEvent } from "@testing-library/react";
import SideNav from "./SideNav";

describe("SideNav component", () => {
  it("renders menu button", () => {
    render(<SideNav />);
    const iconButtonEleemnt = screen.getByTestId(/menu-button/i);
    expect(iconButtonEleemnt).toBeInTheDocument();
  });

  it("opens side nav when clicked", () => {
    render(<SideNav />);
    const iconButtonEleemnt = screen.getByTestId(/menu-button/i);
    expect(iconButtonEleemnt).toBeInTheDocument();

    fireEvent.click(iconButtonEleemnt);
    const menuElement = screen.getByText(/Menu/i);
    expect(menuElement).toBeInTheDocument();
    const itemElement = screen.getByText(/Page 1/i);
    expect(itemElement).toBeInTheDocument();
  });
});
