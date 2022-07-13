/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useWishList } from "../context/wishlist-context";
import { removeItemFromCart } from "../services/cartServices";
import { IsItemInWishList } from "../utils/isItemInWishList";
import { useAuth } from "../context/auth-context";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../services/wishlistServices";

export const HorizontalCard = ({ cardDetailsInCart }) => {
  const { _id, title, imgUrl, price, price_old, discount, quantity } =
    cardDetailsInCart;

  const { dispatchCart } = useCart();
  const { dispatchWishList } = useWishList();
  const { auth } = useAuth();

  const inWishList = IsItemInWishList(_id);

  function changeQuantity(quantityValue) {
    return dispatchCart({
      type: "TOGGLE-QUANTITY",
      payload: { _id, quantityValue },
    });
  }

  return (
    <>
      {/* <!-- Horizontal Cards - 1 --> */}
      <div className="card card-horizontal" id={_id}>
        <div className="card-img-box">
          <Link to={`/product/${_id}`}>
            <img src={imgUrl} alt={title} className="card-img" />
          </Link>
        </div>
        <div className="card-horizontal-content">
          <div className="card-title">
            <h4>{title}</h4>
          </div>

          <div className="item-quantity align-center">
            <label htmlFor="quantity" className="fw-bold">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              maxLength="1"
              value={quantity}
              onChange={(e) => changeQuantity(e.target.value)}
            />
          </div>

          {inWishList ? (
            <i
              className="material-icons heart-icon"
              onClick={() =>
                removeItemFromWishlist({
                  auth,
                  itemId: _id,
                  dispatchWishList,
                })
              }
            >
              favorite
            </i>
          ) : (
            <i
              className="material-icons heart-icon"
              onClick={() =>
                addItemToWishlist({
                  auth,
                  itemDetails: cardDetailsInCart,
                  dispatchWishList,
                })
              }
            >
              favorite_border
            </i>
          )}
          <div className="card-pricing">
            <p className="card-price">₹{price}</p>
            <p className="card-price-cut">₹{price_old}</p>
            <p className="card-percent-discount">{discount}% off</p>
          </div>
          <a
            href="#"
            className="btn btn-outline-icon fw-bold"
            onClick={() =>
              removeItemFromCart({ auth, itemId: _id, dispatchCart })
            }
          >
            <i className="material-icons">remove_shopping_cart</i>
            Remove
          </a>
        </div>
      </div>
    </>
  );
};
