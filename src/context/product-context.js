import {createContext,useContext,useReducer} from "react";
import { filterReducer, filterInitialState } from "../utils/filterReducer";

const ProductContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({children}) =>{
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);
    
   return(
       <ProductContext.Provider value={{state,dispatch}}>
           {children}
       </ProductContext.Provider>
   )

}

export const useProduct = ()=> useContext(ProductContext);
