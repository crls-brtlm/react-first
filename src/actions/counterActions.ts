import {
  COUNTER_ACTION_INCREMENT,
  COUNTER_ACTION_DECREMENT,
  COUNTER_ACTION_ACTIVATE_AUTOINCREMENT,
  COUNTER_ACTION_DEACTIVATE_AUTOINCREMENT,
} from "./counterActionTypes";

export const incrementCounter = () => {
  return {
    type: COUNTER_ACTION_INCREMENT,
  };
};

export const decrementCounter = () => {
  return {
    type: COUNTER_ACTION_DECREMENT,
  };
};

export const activateAutoIncrementCounter = () => {
  return {
    type: COUNTER_ACTION_ACTIVATE_AUTOINCREMENT,
  };
};

export const deactivateAutoIncrementCounter = () => {
  return {
    type: COUNTER_ACTION_DEACTIVATE_AUTOINCREMENT,
  };
};
