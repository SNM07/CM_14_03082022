import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [
    thunk
  ]
  const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
  ))

