import { Card, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { TPost } from "../../queries/post/post";

const StyledCard = styled(Card)<{ clickable?: string }>`
  text-align: left;

  ${({ clickable }) => {
    if (clickable) {
      return `
        transition: background-color 0.1s ease-in-out;

        &:hover {
          cursor: pointer;
          background-color: rgba(0, 72, 120, .05);
        }
      `;
    }
  }}
`;

const StyledPostId = styled(Typography)`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  user-select: none;
`;

const StyledPostUserId = styled(Typography)`
  font-size: 0.875rem;
  opacity: 0.5;
  padding: 0.25rem 0.5rem;
  user-select: none;
`;

const StyledPostTitle = styled(Typography)`
  font-size: 1.125rem;
  padding: 0.25rem 0.5rem;
  line-height: 1.35;
  font-weight: 600;
  color: #002740;
  user-select: none;
`;

const StyledPostBody = styled(Typography)`
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  line-height: 1.35;
  user-select: none;
`;

interface IPostCardProps {
  post: TPost;
  onClick?: () => void;
}

const PostCard = (props: IPostCardProps) => {
  const { post, onClick } = props;

  return (
    <StyledCard clickable={onClick ? "clickable" : undefined} onClick={onClick}>
      <StyledPostId>ID: {post.id}</StyledPostId>
      <StyledPostTitle>{post.title}</StyledPostTitle>
      <StyledPostBody>{post.body}</StyledPostBody>
      <StyledPostUserId>User ID: {post.userId}</StyledPostUserId>
    </StyledCard>
  );
};

export default PostCard;
