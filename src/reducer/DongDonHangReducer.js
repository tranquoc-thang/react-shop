import * as Actions from "../constant/actionTypes.js";

let initialState = {
  billDetails: [
    {
      idBill: 1,
      idProduct: 1,
      quantity: 10,
      unitPrice: 12000,
      beforeTax: 10900,
      tax: 1100,
    },
    {
      idBill: 1,
      idProduct: 3,
      quantity: 43,
      unitPrice: 1222000,
      beforeTax: 107900,
      tax: 1100,
    },
    {
      idBill: 2,
      idProduct: 4,
      quantity: 12,
      unitPrice: 1542000,
      beforeTax: 1090430,
      tax: 11200,
    },
    {
      idBill: 2,
      idProduct: 2,
      quantity: 5,
      unitPrice: 124000,
      beforeTax: 109000,
      tax: 11200,
    },
  ],
};

export default function DongDonHangReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.UPDATE_CREATE_NEW_DONG_DON_HANG: {
      return action.newState;
    }
    default:
      return state;
  }
}
