import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ProductListing } from "../pages/ProductListing";
import { Cart } from "../pages/Cart";
import { WishList } from "../pages/WishList";
import { RequiresAuth } from "./RequiresAuth";
import Mockman from "mockman-js";

import { Routes, Route } from "react-router-dom";
import { SingleProductPage } from "../pages/SingleProductPage";
import { Checkout } from "../pages/Checkout";
import { MyProfile } from "../pages/MyProfile";
import { OrderSuccessPage } from "../pages/OrderSuccessPage";
import { SearchPage } from "../pages/SearchPage";
import { ErrorPage } from "../pages/ErrorPage";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/product/:productId" element={<SingleProductPage />} />

      <Route element={<RequiresAuth />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route
          path="/order-success/:paymentId"
          element={<OrderSuccessPage />}
        />
      </Route>
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};
