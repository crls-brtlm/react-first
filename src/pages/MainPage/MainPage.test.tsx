import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import MainPage from "./MainPage";
import { Router } from "react-router-dom";

describe("MainPage page", () => {
  it("renders MainPage", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MainPage />
      </Router>
    );
  });
});
