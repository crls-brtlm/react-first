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

  it("sould create an action to activate auto-increment", () => {
    const expectedAction = {
      type: types.COUNTER_ACTION_ACTIVATE_AUTOINCREMENT,
    };
    expect(actions.activateAutoIncrementCounter()).toEqual(expectedAction);
  });

  it("sould create an action to de-activate auto-increment", () => {
    const expectedAction = {
      type: types.COUNTER_ACTION_DEACTIVATE_AUTOINCREMENT,
    };
    expect(actions.deactivateAutoIncrementCounter()).toEqual(expectedAction);
  });
});
