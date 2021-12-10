import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddelware = createSagaMiddleware();

const middlewares = [sagaMiddelware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddelware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
