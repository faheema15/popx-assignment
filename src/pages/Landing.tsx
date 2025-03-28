import { useNavigate } from "react-router-dom";
import React from 'react';
import './Landing.css';

const Landing: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-description">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </p>
        <div className="landing-buttons">
          <button className="create-account-button"  onClick={() => navigate("/create-account")}>Create Account</button>
          <button className="login-button"  onClick={() => navigate("/signin")}>Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;