import { call, takeEvery, put } from "redux-saga/effects";
import { TODO_ACTION_FETCH_START } from "../actions/todoActionTypes";
import { ITodoResponse } from "../api/todo/apiGetTodo";
import { apiListTodos } from "../api/todo/apiListTodos";
import * as actions from "../actions/todoActions";

export function* fetchTodosSaga() {
  try {
    const todos: ITodoResponse[] = yield call(apiListTodos);
    yield put(actions.todosFetchSuccess(todos));
  } catch (e) {
    yield put(actions.todosFetchError());
  }
}

export function* todoSagas() {
  yield takeEvery(TODO_ACTION_FETCH_START, fetchTodosSaga);
}
