import "../styles/layouts/navbar.css";
import {Link} from "react-router-dom";

export const Navbar = () => {
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
              <a href="./pages/wishlist.html">
                <i className="material-icons mg-left-sm">favorite</i>
                <span className="badge-count">0</span>
              </a>
            </li>
            <li>
              <a href="./pages/cart.html">
                <i className="material-icons mg-left-sm" id="shop-cart">
                  shopping_cart
                </i>
                <span className="badge-count">0</span>
              </a>
            </li>
          </ul>
        </nav>);
}
