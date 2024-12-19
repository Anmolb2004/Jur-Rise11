import React from "react";
import "./ProgressBar.css";
import { FiCheck } from "react-icons/fi";

function ProgressBar() {
  const steps = [
    { label: "Preliminary" },
    { label: "Your Details" },
    { label: "KYC" },
    { label: "Parties", time: "(Approx 5 Min)" },
    { label: "Claim", time: "(Approx 5 Min)" },
    { label: "Review", time: "(Approx 5 Min)" },
    { label: "Payment", time: "(Approx 5 Min)" },
  ];

  const completedSteps = 3; // Change this to control progress.

  return (
    <div className="header1">
      <div className="stepper-container">
        {steps.map((step, index) => (
          <div className="stepper-item" key={index}>
            {/* Step Label */}
            <div className="step-label">
              <p>
                <strong>{`0${index + 1}`}</strong> {step.label}
              </p>
            </div>

            {/* Circle */}
            <div
              className={`circle ${
                index < completedSteps
                  ? "completed"
                  : index === completedSteps
                  ? "active"
                  : ""
              }`}
            >
              {index < completedSteps ? <FiCheck /> : <span>{index + 1}</span>}
            </div>

                {/* Time */}
            <div className="step-time">{step.time}</div>

            {/* Connecting Lines */}
            {index !== steps.length - 1 && (
              <div
                className={`line ${
                  index === completedSteps - 1
                    ? "dotted-line"
                    : index < completedSteps
                    ? "line-completed"
                    : "line-pending"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;












