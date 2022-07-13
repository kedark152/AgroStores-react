import { useContext, useReducer } from "react";
import { createContext } from "react";
import {
  addressInitialState,
  addressReducer,
} from "../reducers/addressReducer";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addressState, dispatchAddress] = useReducer(
    addressReducer,
    addressInitialState
  );

  return (
    <AddressContext.Provider value={{ addressState, dispatchAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
