import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";

function renderWithStore(
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  {
    initialState,
    store = createStore(counterReducer, initialState),
    ...renderOptions
  }: {
    initialState?: any;
    store?: any;
  } = {}
) {
  function Wrapper({ children }: { children?: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export { renderWithStore };
