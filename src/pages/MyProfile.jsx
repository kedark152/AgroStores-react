import { NavLink } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useAddress } from "../context/address-context";
import { useState } from "react";
import { toast } from "react-toastify";

import "../styles/pages/profile.css";
import { EditAddressModal } from "../components/EditAddressModal";
export const MyProfile = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { addressState, dispatchAddress } = useAddress();
  const [showAddressList, setShowAddressList] = useState(false);
  return (
    <>
      <div className="Profile Pages">
        <Navbar />

        <div className="profile-page-container">
          <div className="profile-card-container">
            <div className="profile-card">
              <h2 className="text-center">My Profile</h2>
              <div className="avatar avatar-lg align-center">
                <img
                  className="img-round"
                  src="https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652893486/irene-strong-v2aKnjMbP_k-unsplash_frd8hv.jpg"
                  alt="avatar-sample-image-large"
                />
              </div>

              <h3 className="mg-y-xsm ">• About Me:</h3>
              <h4>{`Name: ${userData.firstName} ${userData.lastName}`}</h4>
              <h4>Email: {userData.email}</h4>
              <div className="quick-links flex-column">
                <h3 className="mg-y-xsm">• Quick Links:</h3>
                <NavLink to="/cart" className="primary-color fs-sm-plus">
                  My Cart
                </NavLink>
                <NavLink to="/wishlist" className="primary-color fs-sm-plus">
                  My Wishlist
                </NavLink>
              </div>
              <div className="quick-links flex-column">
                <h3 className="mg-y-xsm align-center">
                  • My Address List
                  <i
                    className="material-icons show-hide-address-icon mg-x-xsm "
                    onClick={() => setShowAddressList((toggler) => !toggler)}
                  >
                    {showAddressList ? `close_fullscreen` : `open_in_full`}
                  </i>
                </h3>
                {showAddressList &&
                  addressState.addressList.map((address, index) => (
                    <div
                      key={address.id}
                      className="single-address flex-column"
                    >
                      <div className="align-center">
                        <h2
                          htmlFor={address.id}
                          className=" mg-left-auto fs-sm-plus"
                        >
                          {index + 1}. {address.name}
                          <i
                            className="material-icons mg-left-md btn-edit-address"
                            onClick={() => {
                              dispatchAddress({
                                type: "OPEN-EDIT-ADDRESS",
                                payload: address,
                              });
                            }}
                          >
                            edit
                          </i>
                          <i
                            className="material-icons mg-left-sm btn-delete-address"
                            onClick={() => {
                              dispatchAddress({
                                type: "DELETE-ADDRESS",
                                payload: address.id,
                              });
                              toast.success("Address Deleted");
                            }}
                          >
                            delete
                          </i>
                        </h2>
                      </div>
                      <p>{address.flatName}</p>
                      <p>{address.area}</p>
                      <p>
                        {address.city}, {address.state}, {address.pincode}
                      </p>
                      <p>{address.country}</p>
                      <p>Contact: {address.contact}</p>
                    </div>
                  ))}
                {showAddressList && (
                  <button
                    className="btn btn-solid-icon btn-add-address"
                    onClick={() =>
                      dispatchAddress({
                        type: "TOGGLE-ADDRESS-MODAL",
                        payload: "show-edit-box",
                      })
                    }
                  >
                    <i className="material-icons">add</i> Add New Address
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <EditAddressModal />
      </div>
    </>
  );
};
