import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ClaimForm from "./components/ClaimForm/ClaimForm";
import UploadSection from "./components/UploadSection/UploadSection";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ClaimForm />
        <UploadSection />
      </div>
    </div>
  );
}

export default App;

