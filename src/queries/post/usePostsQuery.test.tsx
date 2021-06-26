/**
 * @jest-environment node
 */
import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import nock from "nock";
import { IPostResponse } from "../../api/post/apiGetPost";
import usePostsQuery from "./usePostsQuery";

const queryClient = new QueryClient();
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const postsResponseSample: IPostResponse[] = [
  {
    id: 1,
    title: "Test title",
    body: "Test body",
    userId: 1,
  },
  {
    id: 2,
    title: "Another test title",
    body: "Another body",
    userId: 1,
  },
];

describe("usePostsQuery hook", () => {
  it("should return post samples", async () => {
    const scope = nock("https://jsonplaceholder.typicode.com")
      .get("/posts")
      .reply(200, postsResponseSample);

    const { result, waitFor } = renderHook(() => usePostsQuery(), {
      wrapper: Wrapper,
    });

    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(result.current.data).toEqual(postsResponseSample);
  });
});
