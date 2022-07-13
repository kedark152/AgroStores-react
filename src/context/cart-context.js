import {createContext,useContext,useReducer} from "react";
import { cartReducer, cartInitialState } from "../reducers/cartReducer";

const CartContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({children}) =>{
    const [cartState, dispatchCart] = useReducer(cartReducer, cartInitialState);
    
   return(
       <CartContext.Provider value={{cartState,dispatchCart}}>
           {children}
       </CartContext.Provider>
   )

}

export const useCart = () => useContext(CartContext);