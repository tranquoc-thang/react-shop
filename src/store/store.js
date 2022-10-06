import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer/reducers.js";
import rootWatcher from "../watcher/watcher.js";

const saga = createSagaMiddleware();
const middleWares = [saga];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

saga.run(rootWatcher);

export default store;
