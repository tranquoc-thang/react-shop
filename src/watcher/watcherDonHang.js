import { put, takeLeading } from "redux-saga/effects";
import * as Actions from "../constant/actionTypes.js";

export function* watcherDonHang() {
  yield takeLeading(Actions.WATCHER_CREATE_NEW_DON_HANG, workerCreateDonHang);
}

function* workerCreateDonHang(action) {
  try {
    yield put({
      type: Actions.CREATE_NEW_DON_HANG,
      action,
    });
  } catch (err) {
    throw new Error(err);
  }
}
