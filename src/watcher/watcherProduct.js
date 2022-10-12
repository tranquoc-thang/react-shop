import { takeLatest, put, select } from "redux-saga/effects";
import * as Actions from "../constant/actionTypes.js";

export function* watcherProduct() {
  yield takeLatest(
    Actions.WATCHER_UPDATE_ADD_NEW_PRODUCT,
    workerAddProductToReducer
  );
}

function* workerAddProductToReducer(action) {
  try {
    const products = yield select((state) => state.SanPhamReducer.products);
    products.unshift({ ...action.data.product, id: products.length + 1 });

    const newState = {
      products: products,
    };

    yield put({
      type: Actions.UPDATE_ADD_NEW_PRODUCT,
      newState,
    });
  } catch (err) {
    throw new Error(err);
  }
}
