import { combineReducers } from "redux";
import { counterReducer, TCounterState } from "./counterReducer";
import { todoReducer, TTodoState } from "./todoReducer";

export type TRootState = {
  counter: TCounterState;
  todo: TTodoState;
};

const createRootReducer = () =>
  combineReducers({
    counter: counterReducer,
    todo: todoReducer,
  });

export default createRootReducer;
