import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Page1 from "./Page1";
import { Router } from "react-router-dom";

describe("Page1 page", () => {
  it("renders MainPage", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Page1 />
      </Router>
    );
    const alertElement = screen.getByText(
      /This is just a Material UI test alert/i
    );
    expect(alertElement).toBeInTheDocument();
  });
});
