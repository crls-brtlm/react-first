import { useQuery } from "react-query";
import { apiListPosts } from "../../api/post/apiListPosts";
import { QUERY_POSTS } from "../../constants/queries";
import { convertPostResponseToPost } from "./convertPostResponseToPost";

export default function usePostsQuery() {
  return useQuery(
    [QUERY_POSTS],
    async () => {
      const postsResponse = await apiListPosts();

      const posts = postsResponse.map((post) =>
        convertPostResponseToPost(post)
      );

      return posts;
    },
    {
      enabled: true,
      retry: 1,
    }
  );
}
