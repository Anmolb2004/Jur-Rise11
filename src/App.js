import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/ProgressBar/ProgressBar";
import ClaimForm from "./components/ClaimForm/ClaimForm";
import UploadSection from "./components/UploadSection/UploadSection";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference to the sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Close sidebar when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="app">
      {/* Pass isSidebarOpen and toggleSidebar to Sidebar and NavBar */}
      <Sidebar ref={sidebarRef} isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "blur" : ""}`}>
        <NavBar toggleSidebar={toggleSidebar} />
        <Header />
        <ClaimForm />
        <br />
        <UploadSection />
      </div>
    </div>
  );
}

export default App;





