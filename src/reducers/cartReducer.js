export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD-TO-CART":
    case "UPDATE-CART":
      return {
        ...state,
        cartItems: payload,
      };
    case "REMOVE-FROM-CART":
      return { ...state, cartItems: payload };
    case "TOGGLE-QUANTITY":
      return { ...state, cartItems: toggleQuantity(state, payload) };
    case "CLEAR-CART":
      return cartInitialState;
    default:
      state;
  }
};

export const cartInitialState = {
  cartItems: [],
  totalPrice: 0,
  totalDiscountPrice: 0,
  totalQuantity: 0,
};

function toggleQuantity(state, payload) {
  for (let i = 0; i < state.cartItems.length; i++) {
    if (state.cartItems[i]._id == payload._id) {
      state.cartItems[i].quantity = payload.quantityValue;
    }
  }
  return [...state.cartItems];
}
