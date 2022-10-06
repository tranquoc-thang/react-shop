import { all } from "redux-saga/effects";
import { watcherProduct } from "./watcherProduct";
import { watcherDonHang } from "./watcherDonHang";
import { watcherDongDonHang } from "./watcherDongDonHang";

export default function* rootSaga() {
  yield all([watcherProduct(), watcherDonHang(), watcherDongDonHang()]);
}
