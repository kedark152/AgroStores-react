import { useCart } from "../context/cart-context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddress } from "../context/address-context";
import { clearCart } from "../services/cartServices";
import { useAuth } from "../context/auth-context";

export const CartPriceCard = () => {
  const { cartState } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const { addressState } = useAddress();
  const { dispatchCart } = useCart();
  const { auth } = useAuth();

  function totalPrice() {
    let collectPrice = 0;
    cartState.cartItems.map(
      (item) => (collectPrice = collectPrice + item.price * item.quantity)
    );
    return collectPrice;
  }
  function totalOldPrice() {
    let collectOldPrice = 0;
    cartState.cartItems.map(
      (item) =>
        (collectOldPrice = collectOldPrice + item.price_old * item.quantity)
    );
    return collectOldPrice;
  }

  const deliveryCharge = () => (totalPrice() > 499 ? 0 : 100);

  const loadScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (addressState.addressList.length > 0 && addressState.addressSelectedId) {
      const res = await loadScript();
      if (!res) {
        toast.error("Razorpay SDK failed to load");
      }

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: (totalPrice() + deliveryCharge()) * 100,
        currency: "INR",
        name: "AgroStores",
        description: "Test Transaction",
        image: "",
        handler: async (response) => {
          clearCart({ auth, dispatchCart });
          toast.success("The payment was successfull");
          navigate(`/order-success/${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "Kedar Kulkarni",
          email: "kedar@gmail.com",
          contact: "9999999998",
        },
        notes: {
          address: "AgroStores Corporate Office",
        },
        theme: {
          color: "#00d68b",
        },
      };

      const razorpayGateway = new window.Razorpay(options);
      razorpayGateway.open();
    } else {
      addressState.addressList.length == 0
        ? toast.error("Please Add address")
        : toast.error("Please Select Delivery Address");
    }
  };

  return (
    <>
      <div className="price-summary">
        <h3 className="fw-bold mg-xsm">Price Details</h3>
        <hr />
        <div className="original-price price-item align-center mg-xsm fw-bold">
          <h4>Price ({cartState.cartItems.length} Items)</h4>
          <p className="para-md">₹{totalOldPrice()}</p>
        </div>
        <div className="discount-price price-item align-center mg-xsm fw-bold">
          <h4>Discount</h4>
          <p className="para-md">- ₹{totalOldPrice() - totalPrice()}</p>
        </div>
        <div className="delivery-charges price-item align-center mg-xsm fw-bold">
          <h4>Delivery Charge</h4>
          <p className="para-md">₹{deliveryCharge()}</p>
        </div>
        <hr />
        <div className="total-amount price-item flex align-center mg-xsm">
          <h4>Total Amount</h4>
          <p className="para-md">₹{totalPrice() + deliveryCharge()}</p>
        </div>
        <hr />

        <p className="note fw-bold mg-xsm">
          You will save ₹{totalOldPrice() - totalPrice()} on this order
        </p>
        <p className="note-free-delivery fw-bold mg-xsm">
          FREE Home Delivery on orders above ₹500
        </p>

        {location.pathname == "/cart" ? (
          <Link
            to="/checkout"
            className="btn btn-solid fw-bold btn-place-order align-center"
          >
            PROCEED TO CHECKOUT
          </Link>
        ) : (
          <a
            className="btn btn-solid fw-bold btn-place-order align-center btn-payment"
            onClick={handlePayment}
          >
            PROCEED TO PAYMENT
          </a>
        )}
      </div>
    </>
  );
};
