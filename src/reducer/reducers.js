import { combineReducers } from "redux";
import SanPhamReducer from "./SanPhamReducer";
import DonHangReducer from "./DonHangReducer";
import DongDonHangReducer from "./DongDonHangReducer";
import MyCartReducer from "./MyCartReducer";

const reducers = combineReducers({
  SanPhamReducer,
  DonHangReducer,
  DongDonHangReducer,
  MyCartReducer,
});

export default reducers;
