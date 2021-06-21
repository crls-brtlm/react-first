import {
  COUNTER_ACTION_INCREMENT,
  COUNTER_ACTION_DECREMENT,
} from "../actions/counterActionTypes";

export type TCounterAction =
  | {
      type: typeof COUNTER_ACTION_INCREMENT;
    }
  | {
      type: typeof COUNTER_ACTION_DECREMENT;
    };

export type TRootState = number;

function counterReducer(state = 0, action: TCounterAction) {
  switch (action.type) {
    case COUNTER_ACTION_INCREMENT:
      return state + 1;
    case COUNTER_ACTION_DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export { counterReducer };
