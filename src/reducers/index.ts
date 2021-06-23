import { combineReducers } from "redux";
import { chatReducer, TChatState } from "./chatReducer";
import { counterReducer, TCounterState } from "./counterReducer";
import { todoReducer, TTodoState } from "./todoReducer";

export type TRootState = {
  counter: TCounterState;
  todo: TTodoState;
  chat: TChatState;
};

const createRootReducer = () =>
  combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    chat: chatReducer,
  });

export default createRootReducer;
