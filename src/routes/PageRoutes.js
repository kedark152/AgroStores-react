import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ProductListing } from "../pages/ProductListing";
import { Cart } from "../pages/Cart";
import { WishList } from "../pages/WishList";
import Mockman from "mockman-js"

import {Routes, Route} from "react-router-dom";

export const PageRoutes = ()=>{
   return(
       <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/login" element={<Login />}/>
           <Route path="/signup" element={<Signup />}/>
           <Route path="/forgotpassword" element={<ForgotPassword />}/>
           <Route path="/products" element={<ProductListing />}/>
           <Route path="/cart" element={<Cart />}/>
           <Route path="/wishlist" element={<WishList />}/>
           <Route path="/mock" element={<Mockman />}/>
       </Routes>
   )
}