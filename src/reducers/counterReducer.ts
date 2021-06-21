import {
  COUNTER_ACTION_INCREMENT,
  COUNTER_ACTION_DECREMENT,
  COUNTER_ACTION_ACTIVATE_AUTOINCREMENT,
  COUNTER_ACTION_DEACTIVATE_AUTOINCREMENT,
} from "../actions/counterActionTypes";

export type TCounterAction =
  | {
      type: typeof COUNTER_ACTION_INCREMENT;
    }
  | {
      type: typeof COUNTER_ACTION_DECREMENT;
    }
  | {
      type: typeof COUNTER_ACTION_ACTIVATE_AUTOINCREMENT;
    }
  | {
      type: typeof COUNTER_ACTION_DEACTIVATE_AUTOINCREMENT;
    };

export type TCounterState = {
  counterValue: number;
  autoIncrement: boolean;
};

function counterReducer(
  state: TCounterState = { counterValue: 0, autoIncrement: false },
  action: TCounterAction
): TCounterState {
  switch (action.type) {
    case COUNTER_ACTION_INCREMENT:
      return {
        ...state,
        counterValue: state.counterValue + 1,
      };
    case COUNTER_ACTION_DECREMENT:
      return {
        ...state,
        counterValue: state.counterValue - 1,
      };
    case COUNTER_ACTION_ACTIVATE_AUTOINCREMENT:
      return {
        ...state,
        autoIncrement: true,
      };
    case COUNTER_ACTION_DEACTIVATE_AUTOINCREMENT:
      return {
        ...state,
        autoIncrement: false,
      };
    default:
      return state;
  }
}

export { counterReducer };
