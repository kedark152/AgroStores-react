import "../styles/layouts/navbar.css";
import {Link} from "react-router-dom";
import {useCart} from "../context/cart-context"
import { useWishList } from "../context/wishlist-context";

export const Navbar = () => {

  const {cartState} = useCart();
  const {wishListState} = useWishList();
    return( 
        <nav className="align-center">
          <div className="nav-brand fs-lg"><Link to="/">Agro<span className="dark-brown-color">Stores</span></Link></div>
          <div className="search-field">
            <i className="material-icons" id="search-icon">search</i>
            <input
              type="text"
              name="search-bar"
              id="search-bar"
              placeholder="Search"
            />
          </div>
    
          <ul className="nav-pills align-center fw-bold">
            <li>
              <Link to="/login" className="btn btn-solid btn-login">Login</Link>
            </li>
            <li>
              <Link to="/wishlist" >
                <i className="material-icons mg-left-sm">favorite</i>
                <span className="badge-count">{wishListState. wishlistItems.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="material-icons mg-left-sm" id="shop-cart">
                  shopping_cart
                </i>
                <span className="badge-count">{cartState.cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </nav>);
}
