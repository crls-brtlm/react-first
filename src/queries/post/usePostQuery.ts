import { useQuery } from "react-query";
import { apiGetPost } from "../../api/post/apiGetPost";
import { QUERY_POSTS } from "../../constants/queries";
import { convertPostResponseToPost } from "./convertPostResponseToPost";

export default function usePostQuery(postId: number) {
  return useQuery(
    [QUERY_POSTS, postId],
    async () => {
      const postResponse = await apiGetPost(postId);

      return convertPostResponseToPost(postResponse);
    },
    {
      enabled: true,
      retry: 1,
    }
  );
}
