import React, { useState } from "react";
import "../../../css/AddressForm.css";
import { useNavigate } from "react-router-dom";
const AddressForm = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [townCity, setTownCity] = useState("");
  const [state, setState] = useState("");
  const [isDefault, setIsDefault] = useState(false);

  const navigate= useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the form data

    // Redirect to the buynow page after form submission
    navigate('/buynow');
  };
  return (
    <div className="address-form">
      <h2>Add a New Address</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="address-form-group-country">
          <label htmlFor="country">Country:</label>
          <select id="country" disabled>
            <option value="india">India</option>
          </select>
        </div>
        <div className="address-form-group-fullname">
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required/>
        </div>
        <div className="address-form-group-mobile">
          <label htmlFor="mobile-number">Mobile Number:</label>
          <input
            type="number"
            id="mobile-number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required/>
        </div>
        <div className="address-form-group-pincode">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="number"
            id="pincode"
            value={pincode}
            min="0"
            max="999999"
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 6) {
                setPincode(input);
              }
            }}
            required/>
        </div>
        <div className="address-form-group-address1">
          <label htmlFor="address-line1">
            Flat, House No, Building, Company, Apartment:
          </label>
          <input
            type="text"
            id="address-line1"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            required/>
        </div>
        <div className="address-form-group-address2">
          <label htmlFor="address-line2">Area, Street, Sector, Village:</label>
          <input
            type="text"
            id="address-line2"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            required/>
        </div>
        <div className="address-form-group-landmark">
          <label htmlFor="landmark">Landmark:</label>
          <input
            type="text"
            id="landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            required/>
        </div>
        <div className="address-form-group-towncity">
          <div className="address-form-town-city">
            <label htmlFor="town-city">Town/City:</label>
            <input
              type="text"
              id="town-city"
              value={townCity}
              onChange={(e) => setTownCity(e.target.value)}
              required/>
          </div>
          <div className="address-form-state">
            <label htmlFor="state">State:</label>
            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Madhya Pradesh</option>
              <option value="">Karnataka</option>
              <option value="">Goa</option>
              <option value="">Arunachal Pradesh</option>
              {/* Include options for states */}
            </select>
          </div>
        </div>
        <div className="address-form-group-default">
          <label>
            <input
              type="checkbox"
              checked={isDefault}
              onChange={() => setIsDefault(!isDefault)}
              required/>
            Make this my default address
          </label>
        </div>
        <button type="submit" onSubmit={handleFormSubmit}>Submit Address</button>
      </form>
    </div>
  );
};

export default AddressForm;
