/* eslint-disable react-hooks/exhaustive-deps */
import {
  Navbar,
  Footer,
  HorizontalCard,
  CartPriceCard,
} from "../components/allComponents";
import "../styles/pages/cart.css";
import { useCart } from "../context/cart-context";

export const Cart = () => {
  const { cartState } = useCart();

  return (
    <>
      <Navbar />
      {/* <!-- main-body --> */}
      <div className="cart-body">
        <h2 className="text-center pd-md cart-heading">
          {cartState.cartItems.length > 0
            ? `Shopping Cart`
            : `Your Cart is Empty`}
        </h2>

        <div className="cart-container-main flex">
          {/* <!-- Product-list --> */}
          <div className="final-product-list flex-column">
            {/* <!-- Horizontal Cards  --> */}
            {cartState.cartItems.length > 0 &&
              cartState.cartItems.map((item) => (
                <HorizontalCard key={item._id} cardDetailsInCart={item} />
              ))}
          </div>
          {/* <!-- Price Details Summary --> */}
          {cartState.cartItems.length > 0 && <CartPriceCard />}
        </div>
      </div>

      <Footer />
    </>
  );
};
