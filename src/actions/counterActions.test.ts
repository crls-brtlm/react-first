import * as actions from "./counterActions";
import * as types from "./counterActionTypes";

describe("counter actions", () => {
  it("should create an action to increment counter", () => {
    const expectedAction = {
      type: types.COUNTER_ACTION_INCREMENT,
    };
    expect(actions.incrementCounter()).toEqual(expectedAction);
  });

  it("should create an action to decrease counter", () => {
    const expectedAction = {
      type: types.COUNTER_ACTION_DECREMENT,
    };
    expect(actions.decrementCounter()).toEqual(expectedAction);
  });
});
