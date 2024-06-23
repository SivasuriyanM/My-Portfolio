import React from "react";
import "../styles/Certifications.css";
import { Link } from "react-router-dom";

function Certification({ title, isActive, link, onClick }) {
  return (
    <div>
      <div>
        <div
          className={`cert-card ${isActive ? "active" : ""}`}
          onClick={() => onClick()}
        >
          <span>{title}</span>
          <div className="cert-icon">
            <Link to={link}>View</Link>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Certification;
