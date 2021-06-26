import { render, screen } from "@testing-library/react";
import { TPost } from "../../queries/post/post";
import PostCard from "./PostCard";

const postSample: TPost = {
  id: 1,
  title: "Title test",
  body: "Body test",
  userId: 1,
};

describe("PostCard component", () => {
  let postElement: HTMLElement;
  let titleElement: HTMLElement;
  let bodyElement: HTMLElement;
  beforeEach(() => {
    render(<PostCard post={postSample} />);
    titleElement = screen.getByText(/Title test/i);
    bodyElement = screen.getByText(/Body test/i);
  });
  it("renders title", () => {
    expect(titleElement).toBeInTheDocument();
  });
  it("renders body", () => {
    expect(bodyElement).toBeInTheDocument();
  });
});
