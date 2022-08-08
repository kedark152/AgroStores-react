import { Link, useLocation, useNavigate } from "react-router-dom";
import { IsItemInCart } from "../utils/isItemInCart";
import { IsItemInWishList } from "../utils/isItemInWishList";
import { useAuth } from "../context/auth-context";
import { useCart } from "../context/cart-context";
import { useWishList } from "../context/wishlist-context";
import { addItemToCart } from "../services/cartServices";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../services/wishlistServices";

export const ProductCard = ({ cardDetails }) => {
  const { dispatchCart } = useCart();
  const { dispatchWishList } = useWishList();

  const {
    _id,
    title,
    imgUrl,
    price,
    price_old,
    discount,
    rating,
    isBestSeller,
    isOutOfStock,
  } = cardDetails;

  const { auth } = useAuth();
  const inWishList = IsItemInWishList(_id);
  const inCart = IsItemInCart(_id);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      {/* Card  */}
      <div className="card card-vertical prod-item-1">
        {isBestSeller && <span className="card-badge-green">Best Seller</span>}
        {isOutOfStock && (
          <div className="card-overlay-container">
            <div className="card-overlay-text">Out of Stock</div>
          </div>
        )}

        {inWishList ? (
          <i
            className="material-icons heart-icon-product-list"
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
            className="material-icons heart-icon-product-list"
            onClick={() => {
              auth.token
                ? addItemToWishlist({
                    auth,
                    itemDetails: cardDetails,
                    dispatchWishList,
                  })
                : navigate(
                    "/login",
                    { state: { from: { pathname: pathname } } },
                    { replace: true }
                  );
            }}
          >
            favorite_border
          </i>
        )}

        <div className="card-img-box">
          <Link to={`/product/${_id}`}>
            <img src={imgUrl} alt={title} className="card-img" />
          </Link>
        </div>
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <p className="card-ratings">
          {rating} <i className="material-icons">star</i>
        </p>
        <div className="card-pricing">
          <p className="card-price">₹{price}</p>
          <p className="card-price-cut">₹{price_old}</p>
          <p className="card-percent-discount">{discount}% off</p>
        </div>

        {inCart ? (
          <Link to="/cart" className="btn btn-outline-icon fw-bold">
            <i className="material-icons">shopping_cart</i>
            Go to Cart
          </Link>
        ) : (
          <button
            className="btn btn-solid-icon fw-bold"
            onClick={() => {
              auth.token
                ? addItemToCart({
                    auth,
                    itemDetails: { ...cardDetails, quantity: 1 },
                    dispatchCart,
                  })
                : navigate(
                    "/login",
                    { state: { from: { pathname: pathname } } },
                    { replace: true }
                  );
            }}
          >
            <i className="material-icons">shopping_cart</i>
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};
