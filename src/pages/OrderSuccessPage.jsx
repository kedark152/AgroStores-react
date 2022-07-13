/* eslint-disable react-hooks/exhaustive-deps */
import {
  Navbar,
  Footer,
  //   HorizontalCard,
} from "../components/allComponents";
import "../styles/pages/cart.css";
import { OrderSuccessCard } from "../components/OrderSuccessCard";
import { useParams } from "react-router-dom";
export const OrderSuccessPage = () => {
  let { paymentId } = useParams();
  return (
    <>
      <Navbar />
      {/* <!-- main-body --> */}
      <div className="cart-body">
        <h2 className="text-center pd-md cart-heading">
          Order Confirmation Page
        </h2>
        <div className="cart-container-main flex">
          {<OrderSuccessCard paymentId={paymentId} />}
        </div>
      </div>

      <Footer />
    </>
  );
};
