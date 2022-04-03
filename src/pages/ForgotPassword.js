import { Navbar, Footer } from "../components/allComponents";
import { Link } from "react-router-dom";
import "../styles/pages/forgotpassword.css"

export const ForgotPassword = ()=>{
    return(
        <>
        <Navbar/>
                {/* Main Container */}
            <div className="reset-pwd-container flex-column-center pd-y-xlg">
                <div className="reset-pwd-card">
                    {/* Heading */}
                    <h2 className="text-center mg-xsm">Forgot Password</h2>
                    {/* Email-id */}
                    <div className="email-id-item mg-xsm flex-column fw-bold">
                    <label htmlFor="email-id" className="mg-bottom-xsm">Email address</label>
                    <input
                        type="email"
                        id="email-id"
                        className="mg-bottom-xsm"
                        placeholder="xyz@gmail.com"
                    />
                    </div>
                     {/* Buttons */}
                    <a href="" className="btn btn-solid fw-bold">Reset Password</a>
                    <Link to="/signup" className="btn btn-outline-icon fw-bold">
                    Create New Account<i className="material-icons">chevron_right</i>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    );
}
