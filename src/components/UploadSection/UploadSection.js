import React, { useState, useRef } from "react";
import "./UploadSection.css";
import { FaCloudUploadAlt, FaFileAlt} from "react-icons/fa";

function UploadSection() {
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState("");
  const fileInputRef = useRef(null); 
  const plusFileInputRef = useRef(null); 


  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      validateFile(uploadedFile);
    }
  };


  const triggerFileInput = () => {
    fileInputRef.current.click();
  };


  const triggerPlusFileInput = () => {
    plusFileInputRef.current.click();
  };


  const handleDragOver = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    e.target.classList.add("drag-over"); 
  };

 
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("drag-over"); 
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
          style={{ display: "none" }} 
        />
      </div>


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
          style={{ display: "none" }} 
        />
      </div>

      
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
          style={{ display: "none" }} 
        />
      </div>
    </div>
  );
}

export default UploadSection;















