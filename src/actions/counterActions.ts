import {
  COUNTER_ACTION_INCREMENT,
  COUNTER_ACTION_DECREMENT,
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
