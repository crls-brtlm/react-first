import {
  COUNTER_ACTION_DECREMENT,
  COUNTER_ACTION_INCREMENT,
} from "../actions/counterActionTypes";
import { counterReducer } from "./counterReducer";

describe("counterReducer", () => {
  it("should handle counter increment", () => {
    expect(counterReducer(0, { type: COUNTER_ACTION_INCREMENT })).toEqual(1);
  });
  it("should handle counter decrement", () => {
    expect(counterReducer(10, { type: COUNTER_ACTION_DECREMENT })).toEqual(9);
  });
});
