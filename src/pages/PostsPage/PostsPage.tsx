import { CircularProgress, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PostCard from "../../components/PostCard/PostCard";
import { ROUTE_POST_PAGE } from "../../constants/routes";
import { TPost } from "../../queries/post/post";

const StyledPage = styled.div`
  background-color: #e4e7e9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledPageContent = styled.div`
  flex: 1 1 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0 1rem;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 72, 120, 0.25);
    width: 0.5rem;
    border-radius: 0.25rem;
  }
`;

const StyledPageInnerContent = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const StyledTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 700;
`;

const StyledLoadingWrapper = styled.div``;

const StyledErrorWrapper = styled.div``;

const StyledCardWrapper = styled.div`
  margin: 0 0 0.5rem;
`;

interface IPostsPageProps {
  posts?: TPost[];
  isLoading: boolean;
  isError: boolean;
  onPostClick: (postId: number) => void;
}

const PostsPage = (props: IPostsPageProps) => {
  const { posts, isLoading, isError, onPostClick } = props;

  return (
    <StyledPage>
      <StyledTitle>Posts Page</StyledTitle>
      <StyledPageContent>
        <StyledPageInnerContent>
          {isLoading ? (
            <StyledLoadingWrapper>
              <CircularProgress size={24} data-testid="loading-spinner" />
            </StyledLoadingWrapper>
          ) : isError ? (
            <StyledErrorWrapper>
              <Alert severity="error">There was an error loading API</Alert>
            </StyledErrorWrapper>
          ) : (
            <Fragment>
              {posts &&
                posts.map((post) => (
                  <StyledCardWrapper key={post.id}>
                    <PostCard
                      post={post}
                      onClick={() => {
                        onPostClick(post.id);
                      }}
                    />
                  </StyledCardWrapper>
                ))}
            </Fragment>
          )}
        </StyledPageInnerContent>
      </StyledPageContent>
    </StyledPage>
  );
};

export default PostsPage;
