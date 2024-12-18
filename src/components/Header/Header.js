import React from "react";
import "./Header.css";
import { FiCheck } from "react-icons/fi";

function Header() {
  const steps = [
    { label: "Preliminary", time: "Approx 5 min" },
    { label: "Your Details", time: "Approx 10 min" },
    { label: "KYC", time: "Approx 8 min" },
    { label: "Parties", time: "Approx 5 min" },
    { label: "Claim", time: "Approx 7 min" },
    { label: "Review", time: "Approx 5 min" },
    { label: "Payment", time: "Approx 3 min" },
  ];

  const completedSteps = 3; // Change this to match progress

  return (
    <div className="header">
      <div className="stepper-container">
        {steps.map((step, index) => (
          <div
            className={`stepper-item ${
              index < completedSteps
                ? "completed"
                : index === completedSteps
                ? "active"
                : ""
            }`}
            key={index}
          >
            {/* Step Circle */}
            <div className="circle">
              {index < completedSteps ? (
                <FiCheck className="check-icon" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>

            {/* Step Label */}
            <div className="step-label">
              <p>{step.label}</p>
              <span className="step-time">{step.time}</span>
            </div>

            {/* Connecting Line */}
            {index !== steps.length - 1 && (
              <div
                className={`line ${
                  index < completedSteps ? "line-completed" : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;


