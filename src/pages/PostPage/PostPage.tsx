import { CircularProgress, Typography, IconButton } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { Fragment } from "react";
import styled from "styled-components";
import { TPost } from "../../queries/post/post";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

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

const StyledTitleWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledBackIcon = styled.div``;

const StyledTitleRight = styled.div`
  flex-grow: 1;
`;

const StyledTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 700;
`;

const StyledLoadingWrapper = styled.div``;

const StyledErrorWrapper = styled.div``;

const StyledItem = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;

const StyledItemLabel = styled(Typography)`
  font-size: 0.875rem;
`;

const StyledItemData = styled(Typography)``;

interface IPostPageProps {
  post?: TPost;
  isLoading: boolean;
  isError: boolean;
  onBackClick: () => void;
}

const PostPage = (props: IPostPageProps) => {
  const { post, isLoading, isError, onBackClick } = props;

  return (
    <StyledPage>
      <StyledTitleWrapper>
        <StyledBackIcon>
          <IconButton onClick={onBackClick}>
            <ChevronLeftIcon />
          </IconButton>
        </StyledBackIcon>
        <StyledTitleRight>
          {post && post.title && (
            <StyledTitle data-testid="page-title">{post.title}</StyledTitle>
          )}
        </StyledTitleRight>
      </StyledTitleWrapper>
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
            post && (
              <Fragment>
                <StyledItem>
                  <StyledItemLabel>Title</StyledItemLabel>
                  <StyledItemData>{post.title}</StyledItemData>
                </StyledItem>
                <StyledItem>
                  <StyledItemLabel>Body</StyledItemLabel>
                  <StyledItemData>{post.body}</StyledItemData>
                </StyledItem>
                <StyledItem>
                  <StyledItemLabel>User ID:</StyledItemLabel>
                  <StyledItemData>{post.userId}</StyledItemData>
                </StyledItem>
              </Fragment>
            )
          )}
        </StyledPageInnerContent>
      </StyledPageContent>
    </StyledPage>
  );
};

export default PostPage;
