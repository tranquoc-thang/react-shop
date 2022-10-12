import * as Actions from "../constant/actionTypes.js";

let initialState = {
  bills: [
    {
      id: 1,
      name: "don hang 1",
      beforeTax: 178000,
      sumTax: 17800,
      afterTax: 195800,
    },
    {
      id: 2,
      name: "don hang 2",
      beforeTax: 345000,
      sumTax: 34500,
      afterTax: 380500,
    },
    {
      id: 3,
      name: "don hang 3",
      beforeTax: 15000,
      sumTax: 1500,
      afterTax: 16500,
    },
    {
      id: 4,
      name: "don hang 4",
      beforeTax: 3150000,
      sumTax: 315000,
      afterTax: 3465000,
    },
  ],
};

export default function DonHangReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.UPDATE_CREATE_NEW_DON_HANG: {
      return action.newBills;
    }
    default:
      return state;
  }
}
