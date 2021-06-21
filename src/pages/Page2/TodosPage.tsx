import { CircularProgress, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { Fragment } from "react";
import styled from "styled-components";
import { ITodoResponse } from "../../api/todo/apiGetTodo";
import TodoCard from "../../components/TodoCard/TodoCard";

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

interface ITodosPageProps {
  todos: ITodoResponse[];
  isLoading: boolean;
  isError: boolean;
}

const TodosPage = (props: ITodosPageProps) => {
  const { todos, isLoading, isError } = props;

  return (
    <StyledPage>
      <StyledTitle>Page 2</StyledTitle>
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
              {todos.map((todo) => (
                <StyledCardWrapper key={todo.id}>
                  <TodoCard todo={todo} />
                </StyledCardWrapper>
              ))}
            </Fragment>
          )}
        </StyledPageInnerContent>
      </StyledPageContent>
    </StyledPage>
  );
};

export default TodosPage;
