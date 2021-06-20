import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button with some text in it", () => {
  render(<Button>Text</Button>);
  const linkElement = screen.getByText(/Text/i);
  expect(linkElement).toBeInTheDocument();
});
