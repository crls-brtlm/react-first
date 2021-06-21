import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { ITodoResponse } from "../../api/todo/apiGetTodo";
import { apiListTodos } from "../../api/todo/apiListTodos";
import TodosPage from "./TodosPage";

interface ITodosPageContainerProps {}

const TodosPageContainer = (props: ITodosPageContainerProps) => {
  const [state, setState] = useState<{
    todos: ITodoResponse[];
    isLoading: boolean;
    isError: boolean;
  }>({
    todos: [],
    isLoading: false,
    isError: false,
  });

  const fetchTodos = useCallback(async () => {
    setState((prevState) => ({ ...prevState, isLoading: true }));

    try {
      let todos = await apiListTodos();

      setState((prevState) => ({
        ...prevState,
        todos: todos,
        isLoading: false,
      }));
    } catch (e) {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isError: true,
      }));
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <TodosPage
      todos={state.todos}
      isLoading={state.isLoading}
      isError={state.isError}
    />
  );
};

export default TodosPageContainer;
