import { TTodo } from "../reducers/todoReducer";
import {
  TODO_ACTION_FETCH_ERROR,
  TODO_ACTION_FETCH_START,
  TODO_ACTION_FETCH_SUCCESS,
} from "./todoActionTypes";

export const fetchTodos = () => {
  return {
    type: TODO_ACTION_FETCH_START,
  };
};

export const todosFetchSuccess = (todos: TTodo[]) => {
  return {
    type: TODO_ACTION_FETCH_SUCCESS,
    payload: {
      todos,
    },
  };
};

export const todosFetchError = () => {
  return {
    type: TODO_ACTION_FETCH_ERROR,
  };
};
