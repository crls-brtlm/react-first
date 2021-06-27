import { all } from "redux-saga/effects";
import { chatSagas } from "./chatSagas";
import { counterSagas } from "./counterSagas";
import { todoSagas } from "./todoSagas";

export default function* rootSaga() {
  yield all([counterSagas(), todoSagas(), chatSagas()]);
}
