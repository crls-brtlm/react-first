import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button with some text in it", () => {
  render(<Button>Text</Button>);
  const buttonElement = screen.getByText(/Text/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders disabled button", () => {
  render(<Button disabled>Disabled</Button>);
  const buttonElement = screen.getByText(/Disabled/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute("disabled", "");
});

test("renders red background button", () => {
  render(<Button color="red">Red button</Button>);
  const buttonElement = screen.getByText(/Red button/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute("style", "background-color: red;");
});

test("renders clickable button", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Clickable</Button>);
  const buttonElement = screen.getByText(/Clickable/i);
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
