import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ClaimForm from "./components/ClaimForm/ClaimForm";
import NavBar from "./components/NavBar/NavBar"
import UploadSection from "./components/UploadSection/UploadSection";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="app">
          <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content">
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


