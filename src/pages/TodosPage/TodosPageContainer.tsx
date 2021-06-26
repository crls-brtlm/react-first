import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../actions/todoActions";
import { TRootState } from "../../reducers";
import TodosPage from "./TodosPage";

interface ITodosPageContainerProps {}

const TodosPageContainer = (props: ITodosPageContainerProps) => {
  const todos = useSelector((state: TRootState) => state.todo.todos);
  const isLoading = useSelector((state: TRootState) => state.todo.isLoading);
  const isError = useSelector((state: TRootState) => state.todo.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return <TodosPage todos={todos} isLoading={isLoading} isError={isError} />;
};

export default TodosPageContainer;
