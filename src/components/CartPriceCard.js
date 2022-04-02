
import {useCart} from "../context/cart-context"
export const CartPriceCard = () =>{
const {cartState} = useCart();
function totalPrice(){
  let collectPrice = 0;
   cartState.cartItems.map((item)=>collectPrice = collectPrice+(item.price*item.quantity));
   return collectPrice;
  }
function totalOldPrice(){
  let collectOldPrice = 0;
   cartState.cartItems.map((item)=>collectOldPrice = collectOldPrice+(item.price_old*item.quantity));
   return collectOldPrice;
  }

  const deliveryCharge = () =>(totalPrice()>499?0:100);
  
    return(<>
      <div className="price-summary">
            <h3 className="fw-bold mg-xsm">Price Details</h3>
            <hr />
            <div className="original-price price-item align-center mg-xsm fw-bold">
              <h4>Price ({cartState.cartItems.length} Items)</h4>
              <p className="para-md">₹{totalPrice()}</p>
            </div>
            <div className="discount-price price-item align-center mg-xsm fw-bold">
              <h4>Discount</h4>
              <p className="para-md">- ₹{totalOldPrice()-totalPrice()}</p>
            </div>
            <div className="delivery-charges price-item align-center mg-xsm fw-bold">
              <h4>Delivery Charge</h4>
              <p className="para-md">₹{deliveryCharge()}</p>
            </div>
            <hr />
            <div className="total-amount price-item flex align-center mg-xsm">
              <h4>Total Amount</h4>
              <p className="para-md">₹{totalPrice()+deliveryCharge()}</p>
            </div>
            <hr />
    
            <p className="note fw-bold mg-xsm">You will save ₹{totalOldPrice()-totalPrice()} on this order</p>
            <p className="note-free-delivery fw-bold mg-xsm">FREE Home Delivery for orders above ₹500</p>
            {/* <!-- Apply-coupon --> */}
            <div className="apply-coupon align-center fw-bold">
              <label htmlFor="coupon-number" className="fs-sm fw-bold mg-left-xsm"
                >Apply Coupon Code</label
              >
              <input
                type="text"
                className="mg-left-xsm fw-bold pd-xsm"
                id="coupon-number"
                maxLength="7"
              />
            </div>
            <a href="" className="btn btn-solid fw-bold btn-place-order align-center">
              PLACE ORDER
            </a>
          </div>
    
    </>)
}