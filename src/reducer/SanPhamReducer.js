import * as Actions from "../constant/actionTypes.js";
import tainghe from "../assets/images/tai-nghe-bluetooth.jpg";
import dongho from "../assets/images/dong-ho-korles.jpg";
import laptop from "../assets/images/laptop-acer.jpg";
import dienthoai from "../assets/images/samsung-galaxy.jpg";
import chuot from "../assets/images/chuot-gaming-asus.jpg";
import routerwifi from "../assets/images/router-wifi.jpg";

let initialState = {
  products: [
    {
      id: 1,
      name: "Tai nghe Bluetooth",
      url: tainghe,
      unitPrice: 3090000,
      tax: 30900,
    },
    {
      id: 2,
      name: "Đồng hồ KORLEX",
      url: dongho,
      unitPrice: 575000,
      tax: 43330,
    },
    {
      id: 3,
      name: "Laptop Acer",
      url: laptop,
      unitPrice: 20490000,
      tax: 1255000,
    },
    {
      id: 4,
      name: "Điện thoại Samsung",
      url: dienthoai,
      unitPrice: 2990000,
      tax: 200000,
    },
    {
      id: 5,
      name: "Chuột Gaming Asus",
      url: chuot,
      unitPrice: 53000,
      tax: 5300,
    },
    {
      id: 6,
      name: "Router Wifi",
      url: routerwifi,
      unitPrice: 1350000,
      tax: 53000,
    },
  ],
};

export default function SanPhamReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.UPDATE_ADD_NEW_PRODUCT: {
      return action.newState;
    }
    default:
      return state;
  }
}
