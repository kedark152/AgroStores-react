import axios from "axios";
import { toast } from "react-toastify";

export const addItemToCart = async ({ auth, itemDetails, dispatchCart }) => {
  try {
    const response = await axios({
      url: "/api/user/cart",
      method: "post",
      headers: {
        authorization: auth.token,
      },
      data: {
        product: itemDetails,
      },
    });

    dispatchCart({
      type: "ADD-TO-CART",
      payload: response.data.cart,
    });
    toast.success("Item Added to Cart");
  } catch (error) {
    console.log("Add Item to Cart Error", error);
    toast.error("Error to add Item in Cart");
  }
};

export const removeItemFromCart = async ({ auth, itemId, dispatchCart }) => {
  try {
    const response = await axios.delete(`/api/user/cart/${itemId}`, {
      headers: { authorization: auth.token },
    });

    dispatchCart({
      type: "REMOVE-FROM-CART",
      payload: response.data.cart,
    });
    toast.success("Item Removed from Cart");
  } catch (error) {
    console.log("Remove Item from Cart Error", error);
    toast.error("Error to remove Item from Cart");
  }
};
//clears cart after payment.
export const clearCart = async ({ auth, dispatchCart }) => {
  try {
    await axios.delete(`/api/user/clearCart`, {
      headers: { authorization: auth.token },
    });
    dispatchCart({ type: "CLEAR-CART" });
  } catch (error) {
    console.log("Clear Cart Error", error);
    toast.error("Error to Clear Cart");
  }
};
