import * as Actions from "../constant/actionTypes.js";

const initialState = {
  cart: [],
};

export default function MyCartReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.UPDATE_ADD_PRODUCT_TO_CART: {
      return action.data.newState;
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
