import { Card, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { ITodoResponse } from "../../api/todo/apiGetTodo";

const StyledCard = styled(Card)`
  text-align: left;
`;

const StyledTodoId = styled(Typography)`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
`;

const StyledTodoUserId = styled(Typography)`
  font-size: 0.875rem;
  opacity: 0.5;
  padding: 0.25rem 0.5rem;
`;

const StyledTodoTitle = styled(Typography)`
  font-size: 1.125rem;
  padding: 0.25rem 0.5rem;
  line-height: 1.35;
  font-weight: 600;
  color: #002740;
`;

interface ITodoCardProps {
  todo: ITodoResponse;
}

const TodoCard = (props: ITodoCardProps) => {
  const { todo } = props;

  return (
    <StyledCard>
      <StyledTodoId>ID: {todo.id}</StyledTodoId>
      <StyledTodoTitle>{todo.title}</StyledTodoTitle>
      <StyledTodoUserId>User ID: {todo.userId}</StyledTodoUserId>
    </StyledCard>
  );
};

export default TodoCard;
