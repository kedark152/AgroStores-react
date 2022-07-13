import "../styles/components/addressCard.css";
import { useAddress } from "../context/address-context";
import { toast } from "react-toastify";
export const AddressCard = () => {
  const { addressState, dispatchAddress } = useAddress();

  return (
    <>
      <div className="address-box flex-column">
        <h2 className="text-center">Address</h2>
        <h4 className="text-center">Select Address for Delivery</h4>
        {addressState.addressList.map((address) => (
          <div key={address.id} className="single-address flex-column">
            <div className="align-center">
              <input
                className="address-select-input "
                type="radio"
                id={address.id}
                name="recipient_name"
                value={address.name}
                defaultChecked={address.isChecked}
                onChange={(e) =>
                  dispatchAddress({
                    type: "SET-ADDRESS-ID",
                    payload: e.target.id,
                  })
                }
              />
              <label htmlFor={address.id} className=" mg-left-auto fs-sm-plus">
                {address.name}
                <i
                  className="material-icons  btn-edit-address"
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
                  className="material-icons  btn-delete-address"
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
              </label>
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
        <button
          className="btn btn-solid-icon"
          onClick={() =>
            dispatchAddress({
              type: "TOGGLE-ADDRESS-MODAL",
              payload: "show-edit-box",
            })
          }
        >
          <i className="material-icons">add</i> Add New Address
        </button>
      </div>
    </>
  );
};
