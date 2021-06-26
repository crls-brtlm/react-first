import { fireEvent, render, screen } from "@testing-library/react";
import nock from "nock";
import { TPost } from "../../queries/post/post";
import { renderWithQuery } from "../../test-utils";
import PostsPage from "./PostsPage";
import PostsPageContainer from "./PostsPageContainer";

const postsSample: TPost[] = [
  {
    id: 1,
    body: "Test body",
    title: "Test title",
    userId: 1,
  },
  {
    id: 2,
    title: "Another test title",
    body: "Another body",
    userId: 1,
  },
];

describe("Posts page", () => {
  let onPostClick = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("renders PostsPage", () => {
    render(
      <PostsPage
        posts={[]}
        isError={false}
        isLoading={false}
        onPostClick={onPostClick}
      />
    );
    const titleElement = screen.getByText(/Posts/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders loading spinner when loading", () => {
    render(
      <PostsPage
        posts={[]}
        isError={false}
        isLoading
        onPostClick={onPostClick}
      />
    );
    const spinnerElement = screen.getByTestId(/loading-spinner/i);
    expect(spinnerElement).toBeInTheDocument();
  });

  it("renders error warning when error", () => {
    render(
      <PostsPage
        posts={[]}
        isError
        isLoading={false}
        onPostClick={onPostClick}
      />
    );
    const errorElement = screen.getByText(/There was an error loading API/i);
    expect(errorElement).toBeInTheDocument();
  });

  it("renders todo list", () => {
    render(
      <PostsPage
        posts={postsSample}
        isError={false}
        isLoading={false}
        onPostClick={onPostClick}
      />
    );
    const postElementBody = screen.getByText(/Test body/i);
    const postElementBody2 = screen.getByText(/Another body/i);
    expect(postElementBody).toBeInTheDocument();
    expect(postElementBody2).toBeInTheDocument();
  });

  it("handles click action", () => {
    render(
      <PostsPage
        posts={postsSample}
        isError={false}
        isLoading={false}
        onPostClick={onPostClick}
      />
    );
    const postElementBody = screen.getByText(/Test body/i);
    fireEvent.click(postElementBody);
    expect(onPostClick).toHaveBeenCalledTimes(1);
  });
});

describe("Posts page container", () => {
  beforeAll(() => {
    nock("https://jsonplaceholder.typicode.com")
      .persist()
      .get("/posts")
      .delay(500)
      .reply(200, postsSample, { "Access-Control-Allow-Origin": "*" });
  });

  it("renders loading spinner before loaded", () => {
    renderWithQuery(<PostsPageContainer />);
    const spinnerElement = screen.getByTestId(/loading-spinner/i);
    expect(spinnerElement).toBeInTheDocument();
  });

  it("renders todo list", async () => {
    renderWithQuery(<PostsPageContainer />);
    const postElementBody = await screen.findByText(/Test body/i);
    const postElementBody2 = await screen.findByText(/Another body/i);
    expect(postElementBody).toBeInTheDocument();
    expect(postElementBody2).toBeInTheDocument();
  });
});
