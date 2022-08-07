export const wishListReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD-TO-WISHLIST":
    case "UPDATE-WISHLIST":
      return { ...state, wishlistItems: payload };
    case "REMOVE-FROM-WISHLIST":
      return { ...state, wishlistItems: payload };
    case "CLEAR-WISHLIST":
      return wishListInitialState;
    default:
      state;
  }
};

export const wishListInitialState = {
  wishlistItems: [],
};
