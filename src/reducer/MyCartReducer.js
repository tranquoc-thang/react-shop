import * as Actions from "../constant/actionTypes.js";

const initialState = {
  cart: [],
};
// {
//   id: 1,
//   name: "san pham 1",
//   quantity: 10,
//   unitPrice: 12000,
// },
// {
//   id: 2,
//   name: "san pham 2",
//   quantity: 4,
//   unitPrice: 120500,
// },
// {
//   id: 3,
//   name: "san pham 3",
//   quantity: 23,
//   unitPrice: 152000,
// },

export default function MyCartReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.UPDATE_ADD_PRODUCT_TO_CART: {
      let quantity = action.data.product.quantity || 1;

      let copyCart = state.cart;

      const productAdd = copyCart.find((product) => {
        return product.id === action.data.product.id;
      });

      if (productAdd) {
        copyCart = copyCart.filter((product) => product.id !== productAdd.id);
        return {
          cart: [
            ...copyCart,
            {
              id: action.data.product.id,
              quantity: productAdd.quantity + quantity,
              unitPrice: 0,
              name: "",
            },
          ],
        };
      } else {
        return {
          cart: [
            ...copyCart,
            {
              id: action.data.product.id,
              quantity: quantity,
              unitPrice: 0,
              name: "",
            },
          ],
        };
      }
    }
    case Actions.UPDATE_EMPTY_CART: {
      return {
        cart: [],
      };
    }
    default:
      return state;
  }
}
