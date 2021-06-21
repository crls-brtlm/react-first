import {
  TODO_ACTION_FETCH_ERROR,
  TODO_ACTION_FETCH_START,
  TODO_ACTION_FETCH_SUCCESS,
} from "../actions/todoActionTypes";
import { todoReducer, TTodo } from "./todoReducer";

describe("todoReducer", () => {
  it("should handle fetch start", () => {
    expect(
      todoReducer(
        { todos: [], isLoading: false, isError: false },
        { type: TODO_ACTION_FETCH_START }
      )
    ).toEqual({ todos: [], isLoading: true, isError: false });
  });
  it("should handle fetch error", () => {
    expect(
      todoReducer(
        { todos: [], isLoading: true, isError: false },
        { type: TODO_ACTION_FETCH_ERROR }
      )
    ).toEqual({ todos: [], isLoading: false, isError: true });
  });
  it("should handle fetch success", () => {
    const todos: TTodo[] = [
      {
        id: 1,
        completed: false,
        title: "Test todo",
        userId: 1,
      },
    ];
    expect(
      todoReducer(
        { todos: [], isLoading: true, isError: false },
        {
          type: TODO_ACTION_FETCH_SUCCESS,
          payload: {
            todos,
          },
        }
      )
    ).toEqual({ todos: todos, isLoading: false, isError: false });
  });
});
