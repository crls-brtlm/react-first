import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Page2 from "./Page2";
import { Router } from "react-router-dom";

describe("Page2 page", () => {
  it("renders MainPage", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Page2 />
      </Router>
    );
    const alertElement = screen.getByText(/Page 2/i);
    expect(alertElement).toBeInTheDocument();
  });
});
