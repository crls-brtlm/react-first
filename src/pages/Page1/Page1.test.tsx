import { screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { renderWithStore } from "../../test-utils";
import Page1 from "./Page1";

describe("Page1 page", () => {
  it("renders MainPage", () => {
    const history = createMemoryHistory();
    renderWithStore(
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
