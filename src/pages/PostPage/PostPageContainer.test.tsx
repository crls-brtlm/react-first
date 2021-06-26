import nock from "nock";
import { TPost } from "../../queries/post/post";
import { renderWithQuery } from "../../test-utils";
import { screen } from "@testing-library/react";
import PostPageContainer from "./PostPageContainer";
import { MemoryRouter, Route } from "react-router-dom";
import { ROUTE_POST_PAGE } from "../../constants/routes";

const postSample: TPost = {
  id: 1,
  body: "Test body",
  title: "Test title",
  userId: 1,
};

describe("Post page", () => {
  beforeAll(() => {
    nock("https://jsonplaceholder.typicode.com")
      .persist()
      .get("/posts/1")
      .delay(500)
      .reply(200, postSample, { "Access-Control-Allow-Origin": "*" });
  });

  it("renders loading spinner before loaded", () => {
    renderWithQuery(
      <MemoryRouter initialEntries={["/post/1"]}>
        <Route path={ROUTE_POST_PAGE}>
          <PostPageContainer />
        </Route>
      </MemoryRouter>
    );
    const spinnerElement = screen.getByTestId(/loading-spinner/i);
    expect(spinnerElement).toBeInTheDocument();
  });

  it("renders PostPage", async () => {
    renderWithQuery(
      <MemoryRouter initialEntries={["/post/1"]}>
        <Route path={ROUTE_POST_PAGE}>
          <PostPageContainer />
        </Route>
      </MemoryRouter>
    );
    const titleElement = await screen.findByTestId(/page-title/i);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toEqual(postSample.title);

    const titleLabel = await screen.findByText("Title");
    expect(titleLabel).toBeInTheDocument();

    const bodyLabel = await screen.findByText("Body");
    expect(bodyLabel).toBeInTheDocument();
    const body = await screen.findByText(postSample.body);
    expect(body).toBeInTheDocument();

    const userIdLabel = await screen.findByText(/User ID:/i);
    expect(userIdLabel).toBeInTheDocument();
  });
});
