import { takeLatest, put } from "redux-saga/effects";
import * as Actions from "../constant/actionTypes.js";

export function* watcherProduct() {
  yield takeLatest(
    Actions.WATCHER_UPDATE_ADD_NEW_PRODUCT,
    workerAddProductToReducer
  );
}

function* workerAddProductToReducer(action) {
  try {
    yield put({
      type: Actions.UPDATE_ADD_NEW_PRODUCT,
      action,
    });
  } catch (err) {
    throw new Error(err);
  }
}
