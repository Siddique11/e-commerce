import { applyMiddleware, createStore, compose } from "redux";

import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
const middlewares = [logger];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

// export default {store}
