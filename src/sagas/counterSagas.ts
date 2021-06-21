import { put, select, takeEvery } from "redux-saga/effects";
import * as counterActions from "../actions/counterActions";
import { COUNTER_ACTION_ACTIVATE_AUTOINCREMENT } from "../actions/counterActionTypes";
import { autoIncrement } from "./selectors";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* activateAutoIncrementSaga() {
  yield delay(1000);
  const autoI: ReturnType<typeof autoIncrement> = yield select(autoIncrement);
  if (autoI) {
    yield put(counterActions.incrementCounter());
    yield put(counterActions.activateAutoIncrementCounter());
  }
}

export function* counterSagas() {
  yield takeEvery(
    COUNTER_ACTION_ACTIVATE_AUTOINCREMENT,
    activateAutoIncrementSaga
  );
}
