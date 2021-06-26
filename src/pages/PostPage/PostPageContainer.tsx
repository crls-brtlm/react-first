import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import usePostQuery from "../../queries/post/usePostQuery";
import PostPage from "./PostPage";

interface IPostPageContainerProps {}

const PostPageContainer = (props: IPostPageContainerProps) => {
  const history = useHistory();
  const match = useRouteMatch<{ id: string }>();
  const postQuery = usePostQuery(parseInt(match.params.id));

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <PostPage
      isLoading={postQuery.isLoading}
      isError={postQuery.isError}
      post={postQuery.data}
      onBackClick={handleBackClick}
    />
  );
};

export default PostPageContainer;
