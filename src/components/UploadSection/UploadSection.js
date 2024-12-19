import React, { useState, useRef } from "react";
import "./UploadSection.css";
import { FaCloudUploadAlt, FaFileAlt} from "react-icons/fa";

function UploadSection() {
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState("");
  const fileInputRef = useRef(null); // Ref for the hidden file input
  const plusFileInputRef = useRef(null); // Ref for the file input triggered by the plus button

  // Handle file selection from input
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      validateFile(uploadedFile);
    }
  };

  // Trigger file input on click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Trigger file input on clicking the plus button
  const triggerPlusFileInput = () => {
    plusFileInputRef.current.click();
  };

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default to allow dropping
    e.stopPropagation();
    e.target.classList.add("drag-over"); // Add class for visual feedback
  };

  // Handle file drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("drag-over"); // Remove drag-over class after drop
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      validateFile(uploadedFile);
    }
  };

  // Validate file type and size
  const validateFile = (file) => {
    if (file.type !== "application/pdf") {
      setErrors("Only PDF files are allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrors("File size must not exceed 2MB.");
      return;
    }

    setErrors("");
    setFiles((prevFiles) => [...prevFiles, file]);
  };

  // Remove uploaded file
  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="upload-container">
      {/* Statement Section */}
      <div className="upload-section">
        <div className="section-header">
          <FaFileAlt className="react-icon" />
          <h3>Statement</h3>
        </div>
        <div
          className="upload-box1 gray-box"
          onClick={triggerFileInput}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p className="text-line">Write your Statement Here</p>
          <p className="or-text">or</p>
          <div className="upload-placeholder">
            <FaCloudUploadAlt className="upload-icon" />
            <p>Upload a Pdf</p>
          </div>
        </div>
        {errors && <p className="error-text">{errors}</p>}
        <div className="uploaded-files">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <p>{file.name}</p>
              <button onClick={() => removeFile(index)}>Remove</button>
            </div>
          ))}
        </div>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileUpload}
          ref={fileInputRef}
          style={{ display: "none" }} // Hidden file input
        />
      </div>

      {/* Agreement under Disputes */}
      <div className="upload-section">
        <div className="section-header">
          <FaFileAlt className="react-icon" />
          <h3>Agreement under Disputes</h3>
        </div>
        <div className="upload-grid">
          <div
            className="upload-box2 gray-box dotted-box"
            onClick={triggerFileInput}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <FaCloudUploadAlt className="upload-icon" />
            <p>Upload the Contract</p>
            <p className="small-text">Max 2MB, PDF</p>
          </div>
          <div
            className="upload-box2 gray-box dotted-box"
            onClick={triggerFileInput}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <FaCloudUploadAlt className="upload-icon" />
            <p>Arbitration Agreement</p>
            <p className="small-text">Max 2MB, PDF</p>
          </div>
        </div>
        {errors && <p className="error-text">{errors}</p>}
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileUpload}
          ref={fileInputRef}
          style={{ display: "none" }} // Hidden file input
        />
      </div>

      {/* Additional Documentation */}
      <div className="upload-section">
        <div className="section-header">
          <FaFileAlt className="react-icon" />
          <h3>Additional Documentation</h3>
        </div>
        <div className="upload-grid">
          <div
            className="upload-box2 gray-box dotted-box"
            onClick={triggerFileInput}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <FaCloudUploadAlt className="upload-icon" />
            <p>Upload the Contract</p>
            <p className="small-text">Max 2MB, PDF</p>
          </div>
          <div className="plus-button" onClick={triggerPlusFileInput}>
          <span className="plus-icon">+</span>
          </div>
        </div>
        {errors && <p className="error-text">{errors}</p>}
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileUpload}
          ref={plusFileInputRef}
          style={{ display: "none" }} // Hidden file input for plus button
        />
      </div>
    </div>
  );
}

export default UploadSection;















