import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  describe("when initial value not defined", () => {
    let labelElement: HTMLElement;
    let valueElement: HTMLElement;
    let incrementButton: HTMLElement;
    let decrementButton: HTMLElement;

    beforeEach(() => {
      render(<Counter />);
      labelElement = screen.getByText(/Contador/i);
      valueElement = screen.getByTestId(/counter-value/i);
      incrementButton = screen.getByText(/Incrementar/i);
      decrementButton = screen.getByText(/Decrement/i);
    });

    it("renders counter", () => {
      expect(labelElement).toBeInTheDocument();
      expect(valueElement).toBeInTheDocument();
      expect(valueElement.textContent).toBe("0");
    });
    it("renders label", () => {
      expect(labelElement).toBeInTheDocument();
    });
    it("renders buttons", () => {
      expect(incrementButton).toBeInTheDocument();
      expect(decrementButton).toBeInTheDocument();
    });
    it("cannot decrement counter when is zero", () => {
      fireEvent.click(decrementButton);
      expect(valueElement.textContent).toBe("0");
    });
    it("can increment counter", () => {
      fireEvent.click(incrementButton);
      expect(valueElement.textContent).toBe("1");
    });
    it("can decrememnt counter", () => {
      fireEvent.click(decrementButton);
      expect(valueElement.textContent).toBe("0");
    });
  });

  describe("when initial value is set", () => {
    let labelElement: HTMLElement;
    let valueElement: HTMLElement;
    let incrementButton: HTMLElement;
    let decrementButton: HTMLElement;

    beforeEach(() => {
      render(<Counter initialValue={10} />);
      labelElement = screen.getByText(/Contador/i);
      valueElement = screen.getByTestId(/counter-value/i);
      incrementButton = screen.getByText(/Incrementar/i);
      decrementButton = screen.getByText(/Decrement/i);
    });

    it("renders counter", () => {
      expect(labelElement).toBeInTheDocument();
      expect(valueElement).toBeInTheDocument();
      expect(valueElement.textContent).toBe("10");
    });
    it("renders label", () => {
      expect(labelElement).toBeInTheDocument();
    });
    it("renders buttons", () => {
      expect(incrementButton).toBeInTheDocument();
      expect(decrementButton).toBeInTheDocument();
    });
    it("can increment counter", () => {
      fireEvent.click(incrementButton);
      expect(valueElement.textContent).toBe("11");
    });
    it("can decrement counter", () => {
      fireEvent.click(decrementButton);
      expect(valueElement.textContent).toBe("9");
    });
  });
});
