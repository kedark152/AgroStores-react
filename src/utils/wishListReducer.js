export const wishListReducer = (state, {type,payload}) => {
    switch (type) {
      case "ADD-TO-WISHLIST": 
        return { ...state, wishlistItems: addToWishList(state,payload)};
      case "REMOVE-FROM-WISHLIST": 
        return { ...state, wishlistItems: removeFromWishList(state,payload) };
    
      default: state;
    }
  };


export const wishListInitialState = {
    wishlistItems:[],
}

function addToWishList(state,payload){
    return  [...state.wishlistItems,payload]
}

function removeFromWishList(state,payload){
    return  state.wishlistItems.filter((item)=>item._id!==payload._id)
}