import { Navbar,Footer } from "../components/allComponents"
import { Link } from "react-router-dom";
import "../styles/pages/signup.css"

export const Signup = ()=>{
    return(
        <>
        <Navbar/>
        {/* Main Container */}
            <div className="signup-container flex-column-center mg-top-sm mg-bottom-sm">
            <div className="signup-card">
                {/* Heading */}
                <h2 className="text-center mg-xsm">Signup</h2>
                {/* Full-Name */}
                <div className="full-name-item flex-column mg-xsm fw-bold">
                <label htmlFor="full-name" className="mg-bottom-xsm">Full Name</label>
                <input
                    type="text"
                    className="mg-bottom-xsm"
                    id="full-name"
                    placeholder="Ram Mishra"
                />
                </div>
                 {/* Email-id */}
                <div className="email-id-item mg-xsm flex-column fw-bold">
                <label htmlFor="email-id" className="mg-bottom-xsm">Email address</label>
                <input
                    type="email"
                    id="email-id"
                    className="mg-bottom-xsm"
                    placeholder="ram.mishra@gmail.com"
                />
                </div>
                {/* <!-- Password --> */}
                <div className="password-item mg-xsm flex-column fw-bold">
                <label htmlFor="password" className="mg-bottom-xsm">Password</label>
                <input
                    type="password"
                    name=""
                    id="password"
                    className="mg-bottom-xsm"
                    minLength="8"
                />
                <i className="material-icons signup-pwd-show-icon">visibility</i>
                </div>
                {/* Confirm Password */}
                <div className="confirm-password-item mg-xsm flex-column fw-bold">
                <label htmlFor="confirm-password" className="mg-bottom-xsm">
                    Confirm Password
                </label>
                <input
                    type="password"
                    name=""
                    id="confirm-password"
                    className="mg-bottom-xsm"
                    minLength="8"
                />
                <i className="material-icons signup-pwd-show-icon">visibility</i>
                </div>
                {/* Terms & Condition */}
                <div className="terms-item mg-xsm fw-bold align-center">
                <input
                    type="checkbox"
                    className="mg-xsm"
                    name=""
                    id="terms"
                />
                <label htmlFor="terms">I accept all Terms & Conditions*</label>
                </div>
                {/* Buttons */}
                <a href="" className="btn btn-solid fw-bold">Create New Account</a>
                <Link to="/login" className="btn btn-outline-icon fw-bold">
                Already have an account?<i className="material-icons">chevron_right</i>
                </Link>
            </div>
            </div>
        <Footer/>
        </>
    )

}