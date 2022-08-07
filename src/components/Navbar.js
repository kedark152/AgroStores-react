import "../styles/layouts/navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useWishList } from "../context/wishlist-context";
import { useAuth } from "../context/auth-context";
import { toast } from "react-toastify";
import { useAddress } from "../context/address-context";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { DebounceInput } from "react-debounce-input";

export const Navbar = ({ setSearchQuery }) => {
  const { cartState, dispatchCart } = useCart();
  const { wishListState, dispatchWishList } = useWishList();
  const { auth, setAuth } = useAuth();
  const { dispatchAddress } = useAddress();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setAuth({ ...auth, token: "", isLoggedIn: false });
    toast.success("Logout Success");
    navigate("/");
    dispatchCart({ type: "CLEAR-CART" });
    dispatchWishList({ type: "CLEAR-WISHLIST" });
    dispatchAddress({ type: "CLEAR-ADDRESS" });
  };
  return (
    <nav className="align-center navbar">
      <div className="mobile-header">
        <i
          className="material-icons mobile-menu-icon"
          onClick={() => setMobileMenuStatus((toggler) => !toggler)}
        >
          menu
        </i>
        <div className="nav-mobile-brand fs-md">
          <Link to="/">
            Agro<span className="dark-brown-color">Stores</span>
          </Link>
        </div>
      </div>
      <div className="nav-brand fs-lg">
        <Link to="/">
          Agro<span className="dark-brown-color">Stores</span>
        </Link>
      </div>
      {/* <SearchBar /> */}
      <div className="search-field">
        <i className="material-icons" id="search-icon">
          search
        </i>
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          type="text"
          name="search-bar"
          id="search-bar"
          placeholder="Search"
          onClick={() => navigate("/search")}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus={location.pathname === "/search"}
        />
      </div>

      {/* <SearchBar /> */}
      <ul className="nav-pills align-center fw-bold">
        <li>
          {auth.token ? (
            <button className="btn btn-solid" onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-solid btn-login">
              Login
            </Link>
          )}
        </li>
        <li>
          <Link to="/wishlist">
            <i className="material-icons mg-left-sm">favorite</i>
            <span className="badge-count">
              {wishListState.wishlistItems.length}
            </span>
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
        <li>
          <Link to="/profile">
            <i className="material-icons mg-left-sm" id="shop-cart">
              account_circle
            </i>
          </Link>
        </li>
      </ul>
      <MobileMenu
        mobileMenuStatus={mobileMenuStatus}
        setMobileMenuStatus={setMobileMenuStatus}
        logoutHandler={logoutHandler}
        wishlistItemsCount={wishListState.wishlistItems.length}
        cartItemsCount={cartState.cartItems.length}
      />
    </nav>
  );
};
