import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import createRootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" &&
  (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const configureStore = () => {
  const store = createStore(createRootReducer(), undefined, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};

export { configureStore };
