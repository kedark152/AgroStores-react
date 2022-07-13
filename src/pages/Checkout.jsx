/* eslint-disable react-hooks/exhaustive-deps */
import {
  Navbar,
  Footer,
  //   HorizontalCard,
  CartPriceCard,
} from "../components/allComponents";
import "../styles/pages/cart.css";
import { useCart } from "../context/cart-context";
import { AddressCard } from "../components/AddressCard";
import { EditAddressModal } from "../components/EditAddressModal";

export const Checkout = () => {
  const { cartState } = useCart();

  return (
    <>
      <Navbar />
      {/* <!-- main-body --> */}
      <div className="cart-body">
        <h2 className="text-center pd-md cart-heading">
          {cartState.cartItems.length > 0
            ? `Checkout Page`
            : `No Products for Checkout`}
        </h2>
        <div className="cart-container-main flex">
          {cartState.cartItems.length > 0 && <AddressCard />}

          {cartState.cartItems.length > 0 && <CartPriceCard />}
        </div>
      </div>
      <EditAddressModal />
      <Footer />
    </>
  );
};
