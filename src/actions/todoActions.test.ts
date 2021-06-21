import { TTodo, TTodoAction } from "../reducers/todoReducer";
import * as actions from "./todoActions";
import * as types from "./todoActionTypes";

describe("todo actions", () => {
  it("should create an action to fetch todos", () => {
    const expectedAction = {
      type: types.TODO_ACTION_FETCH_START,
    };
    expect(actions.fetchTodos()).toEqual(expectedAction);
  });
  it("should create an action on fetch success", () => {
    const todos: TTodo[] = [
      {
        id: 1,
        completed: false,
        title: "Test title",
        userId: 1,
      },
    ];
    const expectedAction: TTodoAction = {
      type: types.TODO_ACTION_FETCH_SUCCESS,
      payload: {
        todos,
      },
    };
    expect(actions.todosFetchSuccess(todos)).toEqual(expectedAction);
  });
  it("should create an action on fetch error", () => {
    const expectedAction = {
      type: types.TODO_ACTION_FETCH_ERROR,
    };
    expect(actions.todosFetchError()).toEqual(expectedAction);
  });
});
