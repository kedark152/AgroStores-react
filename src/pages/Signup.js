import { Navbar, Footer } from "../components/allComponents";
import { Link } from "react-router-dom";
import "../styles/pages/signup.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useState, useRef } from "react";

export const Signup = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  // Used to Show/Hide Passwords
  const [passwordType, setPasswordType] = useState({
    password: "password",
    confirmPassword: "password",
  });

  const editSignupForm = useRef(null);
  const handleSignupForm = (e) => {
    e.preventDefault();
    const form = editSignupForm.current;
    if (form["passwordField"].value === form["confirmPasswordField"].value) {
      signUpHandler({
        firstName: form["firstName"].value,
        lastName: form["lastName"].value,
        email: form["emailId"].value,
        password: form["passwordField"].value,
      });
      editSignupForm.current.reset();
    } else {
      toast.error("Passwords Do Not Match!!");
    }
  };
  const signUpHandler = async (signUpData) => {
    try {
      const response = await axios.post(`/api/auth/signup`, signUpData);
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem(
        "userData",
        JSON.stringify(response.data.createdUser)
      );
      setAuth({
        ...auth,
        token: response.data.encodedToken,
        isLoggedIn: true,
      });
      toast.success("Sign up Successful!!");
      navigate("/products");
    } catch (error) {
      console.log("Signup Error", error);
      toast.error("Server Error, Unable to Signup", error);
    }
  };

  const fillDummyData = (e) => {
    e.preventDefault();
    const form = editSignupForm.current;
    form["firstName"].value = "Ram";
    form["lastName"].value = "Mishra";
    form["emailId"].value = "ram.mishra@gmail.com";
    form["passwordField"].value = "ramMishra@123";
    form["confirmPasswordField"].value = "ramMishra@123";
  };

  return (
    <>
      <Navbar />
      {/* Main Container */}
      <form
        ref={editSignupForm}
        className="signup-container flex-column-center mg-top-sm mg-bottom-sm"
        onSubmit={handleSignupForm}
      >
        <div className="signup-card">
          {/* Heading */}
          <h2 className="text-center mg-xsm">Signup</h2>
          <button
            className="btn btn-solid btn-fill-dummy-data"
            onClick={(e) => fillDummyData(e)}
          >
            Fill Dummy Data
          </button>
          {/* First-Name */}
          <div className="full-name-item flex-column mg-xsm fw-bold">
            <label htmlFor="full-name" className="mg-bottom-xsm">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="mg-bottom-xsm"
              id="first-name"
              placeholder="First Name"
              required
            />
          </div>
          {/* Last-Name */}
          <div className="full-name-item flex-column mg-xsm fw-bold">
            <label htmlFor="full-name" className="mg-bottom-xsm">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="mg-bottom-xsm"
              id="last-name"
              placeholder="Last Name"
              required
            />
          </div>
          {/* Email-id */}
          <div className="email-id-item mg-xsm flex-column fw-bold">
            <label htmlFor="email-id" className="mg-bottom-xsm">
              Email address
            </label>
            <input
              type="email"
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              id="email-id"
              name="emailId"
              className="mg-bottom-xsm"
              placeholder="ram.mishra@gmail.com"
              required
            />
          </div>
          {/* <!-- Password --> */}
          <div className="password-item mg-xsm flex-column fw-bold">
            <label htmlFor="password" className="mg-bottom-xsm">
              Password
            </label>
            <input
              type={passwordType.password}
              id="password"
              name="passwordField"
              className="mg-bottom-xsm"
              minLength="8"
              required
            />
            <i
              className="material-icons signup-pwd-show-icon"
              onClick={() =>
                setPasswordType((passwordType) =>
                  passwordType.password === "password"
                    ? { ...passwordType, password: "text" }
                    : { ...passwordType, password: "password" }
                )
              }
            >
              {passwordType.password === "password"
                ? "visibility"
                : "visibility_off"}
            </i>
          </div>
          {/* Confirm Password */}
          <div className="confirm-password-item mg-xsm flex-column fw-bold">
            <label htmlFor="confirm-password" className="mg-bottom-xsm">
              Confirm Password
            </label>
            <input
              type={passwordType.confirmPassword}
              name="confirmPasswordField"
              id="confirm-password"
              className="mg-bottom-xsm"
              minLength="8"
              required
            />
            <i
              className="material-icons signup-pwd-show-icon"
              onClick={() =>
                setPasswordType((passwordType) =>
                  passwordType.confirmPassword === "password"
                    ? { ...passwordType, confirmPassword: "text" }
                    : { ...passwordType, confirmPassword: "password" }
                )
              }
            >
              {passwordType.confirmPassword === "password"
                ? "visibility"
                : "visibility_off"}
            </i>
          </div>
          {/* Terms & Condition */}
          <div className="terms-item mg-xsm fw-bold align-center">
            <input
              type="checkbox"
              className="mg-xsm"
              name="termsTick"
              id="terms"
              required
            />
            <label htmlFor="terms">I accept all Terms & Conditions*</label>
          </div>
          {/* Buttons */}

          <button
            type="submit"
            href=""
            className="btn btn-solid btn-create-account fw-bold"
          >
            Create New Account
          </button>
          <Link to="/login" className="btn btn-outline-icon btn-signin fw-bold">
            Already have an account?
            <i className="material-icons">chevron_right</i>
          </Link>
        </div>
      </form>
      <Footer />
    </>
  );
};
