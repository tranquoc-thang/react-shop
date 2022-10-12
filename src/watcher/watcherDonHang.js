import { put, takeLeading, select } from "redux-saga/effects";
import * as Actions from "../constant/actionTypes.js";

export function* watcherDonHang() {
  yield takeLeading(
    Actions.WATCHER_UPDATE_CREATE_NEW_DON_HANG,
    workerCreateDonHang
  );
}

function* workerCreateDonHang(action) {
  try {
    const bills = yield select((state) => state.DonHangReducer.bills);

    const index = bills.length + 1;

    const donhang = {
      ...action.data.donhang,
      id: index,
      name: "Don hang " + index,
    };

    const newBills = {
      bills: [...bills, donhang],
    };

    yield put({
      type: Actions.UPDATE_CREATE_NEW_DON_HANG,
      newBills,
    });
  } catch (err) {
    throw new Error(err);
  }
}
