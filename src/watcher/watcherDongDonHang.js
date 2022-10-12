import { put, takeLeading, select } from "redux-saga/effects";
import * as Actions from "../constant/actionTypes.js";

export function* watcherDongDonHang() {
  yield takeLeading(
    Actions.WATCHER_UPDATE_CREATE_NEW_DONG_DON_HANG,
    workerCreateDongDonHang
  );
}

function* workerCreateDongDonHang(action) {
  const billDetails = yield select(
    (state) => state.DongDonHangReducer.billDetails
  );

  try {
    const dongDonHang = action.data.dongdonhangs.map((ddh) => {
      return {
        idBill: action.data.idBill,
        idProduct: ddh.id,
        quantity: ddh.quantity,
        unitPrice: ddh.unitPrice,
        beforeTax: Number(ddh.quantity) * Number(ddh.unitPrice),
        tax: ddh.tax,
      };
    });

    const newState = {
      billDetails: [...billDetails, ...dongDonHang],
    };

    yield put({
      type: Actions.UPDATE_CREATE_NEW_DONG_DON_HANG,
      newState,
    });
  } catch (err) {
    throw new Error(err);
  }
}
