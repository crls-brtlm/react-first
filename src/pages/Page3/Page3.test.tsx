import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Page3 from "./Page3";
import { Router } from "react-router-dom";

describe("Page2 page", () => {
  it("renders MainPage", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Page3 />
      </Router>
    );
    const alertElement = screen.getByText(/Page 3/i);
    expect(alertElement).toBeInTheDocument();
  });
});
