import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { ForgotPassword } from "../pages/ForgotPassword";
import Mockman from "mockman-js"

import {Routes, Route} from "react-router-dom";

export const PageRoutes = ()=>{
   return(
       <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/login" element={<Login />}/>
           <Route path="/signup" element={<Signup />}/>
           <Route path="/forgotpassword" element={<ForgotPassword />}/>
           <Route path="/mock" element={<Mockman />}/>
       </Routes>
   )
}