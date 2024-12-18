import React from "react";
import "./UploadSection.css";
import { FaCloudUploadAlt, FaFileAlt, FaPlusCircle } from "react-icons/fa";

function UploadSection() {
  return (
    <div className="upload-container">
      {/* Statement Section */}
      <div className="upload-section">
        <div className="section-header">
          <FaFileAlt className="react-icon" />
          <h3>Statement</h3>
        </div>
        <div className="upload-box1 gray-box">
          <p className="text-line">Write your Statement Here</p>
          <p className="or-text">or</p>
          <div className="upload-placeholder">
            <FaCloudUploadAlt className="upload-icon" />
            <p>Upload a Pdf</p>
          </div>
        </div>
      </div>

      {/* Agreement under Disputes */}
      <div className="upload-section">
        <div className="section-header">
          <FaFileAlt className="react-icon" />
          <h3>Agreement under Disputes</h3>
        </div>
        <div className="upload-grid">
          <div className="upload-box2 gray-box dotted-box">
            <FaCloudUploadAlt className="upload-icon" />
            <p>Upload the Contract</p>
            <p className="small-text">Max 2MB, PDF</p>
          </div>
          <div className="upload-box2 gray-box dotted-box">
            <FaCloudUploadAlt className="upload-icon" />
            <p>Arbitration Agreement</p>
            <p className="small-text">Max 2MB, PDF</p>
          </div>
        </div>
      </div>

      {/* Additional Documentation */}
      <div className="upload-section">
        <div className="section-header">
          <FaFileAlt className="react-icon" />
          <h3>Additional Documentation</h3>
        </div>
        <div className="upload-grid">
          <div className="upload-box2 gray-box dotted-box">
            <FaCloudUploadAlt className="upload-icon" />
            <p>Upload the Contract</p>
            <p className="small-text">Max 2MB, PDF</p>
          </div>
          <div className="plus-button">
            <FaPlusCircle className="plus-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadSection;











