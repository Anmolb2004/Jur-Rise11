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
          <select
            className="styled-select"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          >
            <option value="" disabled>Select the place for proceedings</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Paris">Paris</option>
          </select>
          <p>Is the place for proceedings the one mentioned in the agreement?</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="placeAgreement" /> Yes
            </label>
            <label>
              <input type="radio" name="placeAgreement" /> No
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
          <select
            className="styled-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="" disabled>Select the language for proceedings</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Hindi">Hindi</option>
            <option value="French">French</option>
          </select>
          <p>Is the language for the proceedings the one mentioned in the agreement?</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="languageAgreement" /> Yes
            </label>
            <label>
              <input type="radio" name="languageAgreement" /> No
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






