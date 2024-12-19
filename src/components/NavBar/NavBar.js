import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = ({ toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header" >
      {isMobile && (
        <button className="hamburger-menu" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      <div className="right-section">
        <div className="bell-icon icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .417-.167.815-.447 1.097L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="notification-dot"></span>
        </div>
        <div className="profile-icon icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12a5 5 0 100-10 5 5 0 000 10zm7 9a7 7 0 10-14 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;





