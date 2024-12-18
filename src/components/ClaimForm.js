import React, { useState } from "react";
import "./ClaimForm.css";
import { FaBalanceScale, FaMapMarkerAlt, FaLanguage } from "react-icons/fa";

function ClaimForm() {
  const [contractValue, setContractValue] = useState("");
  const [claimValue, setClaimValue] = useState("");
  const [place, setPlace] = useState("");
  const [language, setLanguage] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contractValue || !claimValue || !place || !language) {
      alert("Please fill out all fields.");
    } else {
      alert("Form Submitted:", {
        currency,
        contractValue,
        claimValue,
        place,
        language,
      });
    }
  };

  return (
    <div className="claim-form">
      <h3>
        File your Claim. <span>(Approx 5 Minutes)</span>
      </h3>
      <div className="blue-line"></div>

      <form className="form-section" onSubmit={handleSubmit}>
        {/* Claim Value Section */}
        <div className="form-card">
          <div className="form-header">
            <FaBalanceScale className="icon" />
            <h4>Claim Value</h4>
          </div>
          <label>Contract Value</label>
          <div className="input-with-currency">
            <input
              type="number"
              placeholder="10,00,00"
              value={contractValue}
              onChange={(e) => setContractValue(e.target.value)}
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

          <label>Claim Value</label>
          <div className="input-with-currency">
            <input
              type="number"
              placeholder="15,00,00"
              value={claimValue}
              onChange={(e) => setClaimValue(e.target.value)}
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <p className="warning">150% of Contract Value</p>
        </div>

        {/* Place Section */}
        <div className="form-card">
          <div className="form-header">
            <FaMapMarkerAlt className="icon" />
            <h4>Place</h4>
          </div>
          {/* <label>Select Place for Proceedings</label> */}
          <input
            type="text"
            placeholder="Select the place for proceedings"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <p>Is the place for proceedings the one mentioned in the agreement?</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="place" /> Yes
            </label>
            <label>
              <input type="radio" name="place" /> No
            </label>
          </div>
        </div>

        {/* Language Section */}
        <div className="form-card">
          <div className="form-header">
            <FaLanguage className="icon" />
            <h4>Language</h4>
          </div>
          {/* <label>Select Language for Proceedings</label> */}
          <input
            type="text"
            placeholder="Select the language for proceedings"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <p>Is the language for the proceedings the one mentioned in the agreement?</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="language" /> Yes
            </label>
            <label>
              <input type="radio" name="language" /> No
            </label>
          </div>
        </div>
      </form>

      {/* Submit Button */}
      <button type="submit" className="submit-btn" onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
}

export default ClaimForm;





