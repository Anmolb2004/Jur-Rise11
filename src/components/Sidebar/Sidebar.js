import React from "react";
import "./Sidebar.css";
import Jur from "./Jur.png";
import Justice from "./Justice.png";
import {
  FiHome,
  FiFolder,
  FiActivity,
  FiCalendar,
  FiFileText,
  FiMessageCircle,
} from "react-icons/fi";

// Wrap Sidebar with forwardRef
const Sidebar = React.forwardRef(({ isOpen }, ref) => {
  return (
    <div ref={ref} className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Logo Section */}
      <div className="logo-section">
        <img src={Jur} alt="Jur Logo" className="jur-logo" />
        <h1 className="logo-text">Jur</h1>
      </div>

      {/* Menu List */}
      <ul className="menu">
        <li className="menu-item active">
          <FiHome className="menu-icon" />
          Dashboard
        </li>
        <li className="menu-item">
          <FiFolder className="menu-icon" />
          My Cases
        </li>
        <li className="menu-item">
          <FiActivity className="menu-icon" />
          Activities
        </li>
        <li className="menu-item">
          <FiCalendar className="menu-icon" />
          Calendar
        </li>
        <li className="menu-item">
          <FiFileText className="menu-icon" />
          Files
        </li>
        <li className="menu-item">
          <FiMessageCircle className="menu-icon" />
          Open a Dispute
        </li>
      </ul>

      {/* Justice Banner */}
      <div className="justice-banner">
        <img src={Justice} alt="Justice Illustration" className="banner-image" />
      </div>
    </div>
  );
});

export default Sidebar;





