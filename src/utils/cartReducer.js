

export const cartReducer = (state, {type,payload}) => {
    switch (type) {
      case "ADD-TO-CART": 
        return { ...state, cartItems: addToCart(state,payload)};
      case "REMOVE-FROM-CART": 
        return { ...state, cartItems: removeFromCart(state,payload) };
      case "TOGGLE-QUANTITY": 
        return { ...state, cartItems: toggleQuantity(state,payload) };  
      default: state;
    }
  };


export const cartInitialState = {
    cartItems:[],
      totalPrice:0,
      totalDiscountPrice:0,
      totalQuantity:0,
}

function addToCart (state,payload){
    return  [...state.cartItems,payload]  
}

function removeFromCart (state,payload){
    return  state.cartItems.filter((item)=>item._id!==payload._id)
}

function toggleQuantity(state,payload){
  
   for(let i=0;i<state.cartItems.length;i++){
      if(state.cartItems[i]._id==payload._id){
        state.cartItems[i].quantity = payload.quantityValue;
      }
     
   }
   return [...state.cartItems]
}
