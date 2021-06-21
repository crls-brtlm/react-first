import {
  COUNTER_ACTION_ACTIVATE_AUTOINCREMENT,
  COUNTER_ACTION_DEACTIVATE_AUTOINCREMENT,
  COUNTER_ACTION_DECREMENT,
  COUNTER_ACTION_INCREMENT,
} from "../actions/counterActionTypes";
import { counterReducer } from "./counterReducer";

describe("counterReducer", () => {
  it("should handle counter increment", () => {
    expect(
      counterReducer(
        { counterValue: 0, autoIncrement: false },
        { type: COUNTER_ACTION_INCREMENT }
      )
    ).toEqual({ counterValue: 1, autoIncrement: false });
  });
  it("should handle counter decrement", () => {
    expect(
      counterReducer(
        { counterValue: 10, autoIncrement: false },
        { type: COUNTER_ACTION_DECREMENT }
      )
    ).toEqual({ counterValue: 9, autoIncrement: false });
  });
  it("should handle counter auto-increment activation", () => {
    expect(
      counterReducer(
        { counterValue: 0, autoIncrement: false },
        { type: COUNTER_ACTION_ACTIVATE_AUTOINCREMENT }
      )
    ).toEqual({ counterValue: 0, autoIncrement: true });
  });
  it("should handle counter auto-increment deactivation", () => {
    expect(
      counterReducer(
        { counterValue: 0, autoIncrement: true },
        { type: COUNTER_ACTION_DEACTIVATE_AUTOINCREMENT }
      )
    ).toEqual({ counterValue: 0, autoIncrement: false });
  });
});
