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

if (localStorage.getItem("dongDonHangReducer") === null) {
  localStorage.setItem("dongDonHangReducer", JSON.stringify(initialState));
} else {
  initialState = JSON.parse(localStorage.getItem("dongDonHangReducer"));
}

export default function DongDonHangReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.CREATE_NEW_DONG_DON_HANG: {
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

      localStorage.setItem(
        "dongDonHangReducer",
        JSON.stringify({
          billDetails: [...state.billDetails, ...dongDonHang],
        })
      );

      return {
        billDetails: [...state.billDetails, ...dongDonHang],
      };
    }
    default:
      return state;
  }
}
