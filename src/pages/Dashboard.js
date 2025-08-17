import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // adjust path if needed

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-overlay">
        <h1>Welcome to Adesua Hub 📚</h1>
        <p>Select a subject to begin your revision:</p>

        <div className="subject-links">
          <button onClick={() => navigate("/mathematics")}>Mathematics</button>
          <button onClick={() => navigate("/english")}>English</button>
          <button onClick={() => navigate("/science")}>Science</button>
          <button onClick={() => navigate("/social-studies")}>Social Studies</button>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
