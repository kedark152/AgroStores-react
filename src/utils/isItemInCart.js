import { useCart } from "../context/cart-context";

export const IsItemInCart = (id) => {
  const { cartState } = useCart();
  let itemStatus = false;
  if (cartState.cartItems.length > 0) {
    cartState.cartItems.map((item) => {
      item._id === id ? (itemStatus = true) : null;
    });
  }
  return itemStatus;
};
