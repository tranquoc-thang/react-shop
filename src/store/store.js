import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "../reducer/reducers.js";
import rootWatcher from "../watcher/watcher.js";

const saga = createSagaMiddleware();
const middleWares = [saga];

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["MyCartReducer"],
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(...middleWares)
);

saga.run(rootWatcher);

export default store;
export let persistor = persistStore(store);
