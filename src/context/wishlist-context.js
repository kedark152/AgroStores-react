import { createContext, useContext, useReducer } from "react";
import {
  wishListReducer,
  wishListInitialState,
} from "../reducers/wishListReducer";

const WishListContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const WishListProvider = ({ children }) => {
  const [wishListState, dispatchWishList] = useReducer(
    wishListReducer,
    wishListInitialState
  );

  return (
    <WishListContext.Provider value={{ wishListState, dispatchWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);
