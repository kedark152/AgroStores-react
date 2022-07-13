import "../styles/components/orderCard.css";
import { Link } from "react-router-dom";
export const OrderSuccessCard = ({ paymentId }) => {
  return (
    <>
      <div className="order-box flex-column">
        <img
          src="https://res.cloudinary.com/dvuh4fz9d/image/upload/v1657615696/check_xyzqdd.png"
          className="success-tick-img"
        />
        <h2 className="text-center">Your Order Has Been Placed Successfully</h2>
        <h3 className="text-center payment-text">Payment ID: {paymentId}</h3>
        <h4 className="text-center email-msg-text">
          You will receive order Details soon on your email
        </h4>

        <Link to="/products" className="btn btn-solid btn-continue-shopping">
          Continue Shopping{" "}
          <i className="material-icons mg-left-xsm">shopping_basket</i>
        </Link>
      </div>
    </>
  );
};
