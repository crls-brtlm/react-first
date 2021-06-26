import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./configureStore";
import { runSaga } from "redux-saga";
import { QueryClient, QueryClientProvider } from "react-query";

export function renderWithStore(
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  {
    initialState,
    store = configureStore(),
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

export async function recordSaga(saga: any, initialAction: any) {
  const dispatched: any[] = [];

  await (
    runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      saga,
      initialAction
    ) as any
  ).done;

  return dispatched;
}

const queryClient = new QueryClient();

export function renderWithQuery(
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  {
    initialState,
    store = configureStore(),
    ...renderOptions
  }: {
    initialState?: any;
    store?: any;
  } = {}
) {
  function Wrapper({ children }: { children?: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
