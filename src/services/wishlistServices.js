import axios from "axios";
import { toast } from "react-toastify";

export const addItemToWishlist = async ({
  auth,
  itemDetails,
  dispatchWishList,
}) => {
  try {
    const response = await axios({
      url: "/api/user/wishlist",
      method: "post",
      headers: {
        authorization: auth.token,
      },
      data: {
        product: itemDetails,
      },
    });

    dispatchWishList({
      type: "ADD-TO-WISHLIST",
      payload: response.data.wishlist,
    });
    toast.success("Item Added to Wishlist");
  } catch (error) {
    console.log("Add Item to Wishlist Error", error);
    toast.error("Error to add Item in Wishlist");
  }
};

export const removeItemFromWishlist = async ({
  auth,
  itemId,
  dispatchWishList,
}) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${itemId}`, {
      headers: { authorization: auth.token },
    });
    
    dispatchWishList({
      type: "REMOVE-FROM-WISHLIST",
      payload: response.data.wishlist,
    });
    toast.success("Item Removed from Wishlist");
  } catch (error) {
    console.log("Remove Item from Wishlist Error", error);
    toast.error("Error to remove Item from Wishlist");
  }
};
