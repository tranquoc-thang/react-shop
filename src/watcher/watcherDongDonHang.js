import { put, takeLeading } from "redux-saga/effects";
import * as Actions from "../constant/actionTypes.js";

export function* watcherDongDonHang() {
  yield takeLeading(
    Actions.WATCHER_CREATE_NEW_DONG_DON_HANG,
    workerCreateDongDonHang
  );
}

function* workerCreateDongDonHang(action) {
  try {
    console.log("on workerCreateDongDonHang");
    yield put({
      type: Actions.CREATE_NEW_DONG_DON_HANG,
      action,
    });
  } catch (err) {
    throw new Error(err);
  }
}
