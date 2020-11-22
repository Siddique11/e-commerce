import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
const middlewares = [];
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === "logger") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default {store}
