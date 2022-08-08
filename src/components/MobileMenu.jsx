import { Link } from "react-router-dom";
import "../styles/components/mobileMenu.css";
import { useAuth } from "../context/auth-context";
export const MobileMenu = ({
  mobileMenuStatus,
  setMobileMenuStatus,
  logoutHandler,
  wishlistItemsCount,
  cartItemsCount,
}) => {
  let mobileClassName = "mobile-menu";
  if (mobileMenuStatus) {
    mobileClassName = "mobile-menu show-menu";
  } else {
    mobileClassName = "mobile-menu";
  }
  const { auth } = useAuth();
  return (
    <div className={mobileClassName}>
      <div className="mobile-menu-head">
        <Link to="/">
          <h1 className="mobile-logo">
            Agro<span className="dark-brown-color">Stores</span>
          </h1>
        </Link>
        <span
          className="material-icons mobile-menu-close"
          onClick={() => setMobileMenuStatus((toggler) => !toggler)}
        >
          close
        </span>
      </div>
      <Link to="/products" className="link-mobile-menu fw-bold shop pd-sm">
        Show All Products
      </Link>
      <Link to="/search" className="link-mobile-menu fw-bold shop pd-sm">
        Search Products
      </Link>
      <Link to="/cart" className="link-mobile-menu fw-bold pd-sm ">
        Cart ({cartItemsCount})
      </Link>
      <Link to="/wishlist" className="link-mobile-menu fw-bold pd-sm ">
        Wishlist ({wishlistItemsCount})
      </Link>

      <Link to="/profile" className="link-mobile-menu fw-bold pd-sm">
        My Profile
      </Link>
      {auth.token ? (
        <button className="btn btn-solid" onClick={logoutHandler}>
          Logout
        </button>
      ) : (
        <Link to="/login" className="btn btn-solid btn-login">
          Login
        </Link>
      )}
    </div>
  );
};
