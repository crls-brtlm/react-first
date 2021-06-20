import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders button with some text in it", () => {
    render(<Button>Text</Button>);
    const buttonElement = screen.getByText(/Text/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders clickable button", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    const buttonElement = screen.getByText(/Clickable/i);
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
