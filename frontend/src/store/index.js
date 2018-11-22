import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "../reducers/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise";

const composePlugin =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;
const createStoreWithMiddleware = applyMiddleware(promise, thunk)(
  createStore
);
const store = createStoreWithMiddleware(RootReducer, composePlugin);

export default store;
