import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/pages/errorPage.css";
export const ErrorPage = () => {
  return (
    <>
      <div className="Error Pages">
        <Navbar />

        <div className="error-page-container flex-column-center">
          <img
            src="https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652809269/404_Error-amico_gq6jqz.svg"
            alt="page-not-found"
            className="img-responsive error-img"
          />
          <Link to="/" className="btn btn-solid pd-md">
            Go to Home Page
          </Link>
        </div>
      </div>
    </>
  );
};
