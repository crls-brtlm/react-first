import {
  TODO_ACTION_FETCH_ERROR,
  TODO_ACTION_FETCH_START,
  TODO_ACTION_FETCH_SUCCESS,
} from "../actions/todoActionTypes";

export type TTodoAction =
  | {
      type: typeof TODO_ACTION_FETCH_START;
    }
  | {
      type: typeof TODO_ACTION_FETCH_SUCCESS;
      payload: {
        todos: TTodo[];
      };
    }
  | {
      type: typeof TODO_ACTION_FETCH_ERROR;
    };

export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TTodoState = {
  todos: TTodo[];
  isLoading: boolean;
  isError: boolean;
};

function todoReducer(
  state: TTodoState = { todos: [], isLoading: false, isError: false },
  action: TTodoAction
): TTodoState {
  switch (action.type) {
    case TODO_ACTION_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case TODO_ACTION_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case TODO_ACTION_FETCH_SUCCESS:
      return {
        ...state,
        todos: [...action.payload.todos],
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
}

export { todoReducer };
