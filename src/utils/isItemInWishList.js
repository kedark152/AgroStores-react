import {useWishList} from "../context/wishlist-context";

export const IsItemInWishList = (id)=>{
  const {wishListState} = useWishList();
 let itemStatus = false;
 wishListState.wishlistItems.map((item)=>{
    item._id === id ? (itemStatus = true) : null
}
  )
  return itemStatus;
}