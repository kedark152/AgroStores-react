import { useCart } from "../context/cart-context";
import { useWishList } from "../context/wishlist-context";
import { Link } from "react-router-dom";
import { IsItemInCart } from "../utils/isItemInCart";
import { IsItemInWishList } from "../utils/isItemInWishList";
// eslint-disable-next-line react/prop-types
export const ProductCard =({cardDetails}) =>{
  // eslint-disable-next-line react/prop-types
  const { _id, title, imgUrl,price,price_old,discount, rating,  isBestSeller,  isOutOfStock} = cardDetails;
  const {dispatchCart} =useCart();
  const {dispatchWishList} = useWishList();

  const inWishList = IsItemInWishList(_id);
  const inCart = IsItemInCart(_id);


    return (
            <>
             {/* Card  */}
        <div className="card card-vertical prod-item-1">
            { isBestSeller && <span className="card-badge-green">Best Seller</span>}
            { isOutOfStock && <div className="card-overlay-container">
                <div className="card-overlay-text">Out of Stock</div>
               </div> }
          
               
          {inWishList?<i className="material-icons heart-icon-product-list" onClick={()=>dispatchWishList({type:"REMOVE-FROM-WISHLIST",payload:cardDetails})}>favorite</i>
                     :<i className="material-icons heart-icon-product-list" onClick={()=>dispatchWishList({type:"ADD-TO-WISHLIST",payload:cardDetails})}>favorite_border</i>
          }
          
          <div className="card-img-box">
            <a href="#">
              <img
                src={imgUrl}
                alt={title}
                className="card-img"
              />
            </a>
          </div>
          <div className="card-title">
            <h4>
             {title}
            </h4>
          </div>
          <p className="card-ratings">{rating} <i className="material-icons">star</i></p>
          <div className="card-pricing">
            <p className="card-price">₹{price}</p>
            <p className="card-price-cut">₹{price_old}</p>
            <p className="card-percent-discount">{discount}% off</p>
          </div>

              {inCart?
              (<Link to="/cart" className="btn btn-outline-icon fw-bold">
                  <i className="material-icons">shopping_cart</i>
                  Go to Cart
                </Link>)
                :(<a href="#" className="btn btn-solid-icon fw-bold" onClick={()=>dispatchCart({type:"ADD-TO-CART",payload: { _id,title, imgUrl,price,price_old,discount,quantity:1}})}>
                <i className="material-icons">shopping_cart</i>
                Add to Cart
              </a>)}
        
        </div>
    </>
    )
}
