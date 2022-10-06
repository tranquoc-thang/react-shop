import * as Actions from "../constant/actionTypes.js";

let initialState = {
  products: [
    {
      id: 1,
      name: "San pham 1",
      url: "https://picsum.photos/300/150",
      unitPrice: 12000,
      tax: 1200,
    },
    {
      id: 2,
      name: "San pham 2",
      url: "https://picsum.photos/300/150",
      unitPrice: 433300,
      tax: 43330,
    },
    {
      id: 3,
      name: "San pham 3",
      url: "https://picsum.photos/300/150",
      unitPrice: 955000,
      tax: 95500,
    },
    {
      id: 4,
      name: "San pham 4",
      url: "https://picsum.photos/300/150",
      unitPrice: 53000,
      tax: 5300,
    },
  ],
};

if (localStorage.getItem("sanPhamReducer") === null) {
  localStorage.setItem("sanPhamReducer", JSON.stringify(initialState));
} else {
  console.log(localStorage.getItem("sanPhamReducer"));
  initialState = JSON.parse(localStorage.getItem("sanPhamReducer"));
}

console.log(JSON.parse(localStorage.getItem("sanPhamReducer")));

export default function SanPhamReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.UPDATE_ADD_NEW_PRODUCT: {
      const newState = {
        products: [
          ...state.products,
          {
            ...action.action.data.product,
          },
        ],
      };

      localStorage.setItem("sanPhamReducer", JSON.stringify(newState));

      return newState;
    }
    default:
      return state;
  }
}
