import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ClaimForm from "./components/ClaimForm/ClaimForm";
import UploadSection from "./components/UploadSection/UploadSection";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app">
      {/* Pass isSidebarOpen and toggleSidebar to Sidebar and NavBar */}
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "blur" : ""}`}>
        <NavBar toggleSidebar={toggleSidebar} />
        <Header />
        <ClaimForm />
        <br></br>
        <UploadSection />
      </div>
    </div>
  );
}

export default App;




