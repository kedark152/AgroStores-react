import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../styles/pages/singleProductPage.css";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { Loader } from "../components/Loader";
import { GetProductById } from "../services/getProductById";
import { IsItemInCart } from "../utils/isItemInCart";
import { IsItemInWishList } from "../utils/isItemInWishList";
import { addItemToCart } from "../services/cartServices";

import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../services/wishlistServices";
import { useAuth } from "../context/auth-context";
import { useWishList } from "../context/wishlist-context";
import { useCart } from "../context/cart-context";

export const SingleProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { loader, product } = GetProductById(productId);
  const { auth } = useAuth();
  const { dispatchWishList } = useWishList();
  const { dispatchCart } = useCart();
  const inWishList = IsItemInWishList(productId);
  const inCart = IsItemInCart(productId);
  const { pathname } = useLocation();
  const {
    _id,
    title,
    imgUrl,
    price,
    price_old,
    discount,
    rating,
    categoryName,
    productDetails,
    description,
  } = product;

  return (
    <div className="single-product-page flex-column">
      <Navbar />
      {loader && <Loader />}
      {!loader && (
        <>
          <div className="product-box flex" id={_id}>
            <img className="product-img" src={imgUrl} />
            <div className="product-info flex-column ">
              <h2 className="single-product-title">{title}</h2>
              <p className="card-ratings">
                {rating} <i className="material-icons">star</i>
              </p>
              <p>
                <span className="fw-bold">Category:</span> {categoryName}
              </p>
              <div className="card-pricing">
                <p className="card-price">₹{price}</p>
                <p className="card-price-cut">₹{price_old}</p>
                <p className="card-percent-discount">{discount}% off</p>
              </div>
              <div className="action-buttons-single-product flex">
                {inCart ? (
                  <Link
                    to="/cart"
                    className="btn btn-outline-icon fw-bold btn-singlePg-cart"
                  >
                    <i className="material-icons">shopping_cart</i>
                    <span>Go to Cart</span>
                  </Link>
                ) : (
                  <button
                    className="btn btn-solid-icon fw-bold btn-singlePg-cart"
                    onClick={() => {
                      auth.token
                        ? addItemToCart({
                            auth,
                            itemDetails: { ...product, quantity: 1 },
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
                    <span>Add to Cart</span>
                  </button>
                )}
                {inWishList ? (
                  <button
                    className="btn btn-outline-icon fw-bold btn-singlePg-wishlist"
                    onClick={() =>
                      removeItemFromWishlist({
                        auth,
                        itemId: _id,
                        dispatchWishList,
                      })
                    }
                  >
                    <i className="material-icons red-color">favorite</i>
                    <span> Item in Wishlist</span>
                  </button>
                ) : (
                  <button
                    className="btn btn-solid-icon fw-bold"
                    onClick={() => {
                      auth.token
                        ? addItemToWishlist({
                            auth,
                            itemDetails: product,
                            dispatchWishList,
                          })
                        : navigate(
                            "/login",
                            { state: { from: { pathname: pathname } } },
                            { replace: true }
                          );
                    }}
                  >
                    <i className="material-icons red-color">favorite_border</i>
                    <span>Add to Wishlist</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="product-description-box flex">
            <div className="product-description fs-sm">
              <h3>Product Description</h3>
              {description}
            </div>
            <div className="product-details fs-sm flex-column">
              <h3>Product Details</h3>
              {productDetails &&
                Object.entries(productDetails).map(([key, value]) => (
                  <p key={key}>
                    <span className="fw-bold">{key}:</span> {value}
                  </p>
                ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};
