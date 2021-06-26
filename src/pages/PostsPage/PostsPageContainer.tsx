import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTE_POST_PAGE } from "../../constants/routes";
import usePostsQuery from "../../queries/post/usePostsQuery";
import PostsPage from "./PostsPage";

interface IPostsPageContainerProps {}

const PostsPageContainer = (props: IPostsPageContainerProps) => {
  const history = useHistory();
  const postsQuery = usePostsQuery();

  const handlePostClick = (postId: number) => {
    history.push(ROUTE_POST_PAGE.replace(":id", postId + ""));
  };

  return (
    <PostsPage
      posts={postsQuery.data}
      isError={postsQuery.isError}
      isLoading={postsQuery.isLoading}
      onPostClick={handlePostClick}
    />
  );
};

export default PostsPageContainer;
