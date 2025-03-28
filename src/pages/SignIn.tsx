import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = (password: string) => password.length >= 8 && /[A-Za-z]/.test(password) && /[0-9]/.test(password);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long and include letters & numbers');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) navigate('/account');
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2 className="signin-title">Sign in to your <br /> PopX account</h2>
        <p className="signin-description">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" id="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="email">Email Address</label>
            {emailError && <p className="error">{emailError}</p>}
          </div>

          <div className="form-group">
            <input type="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label htmlFor="password">Password</label>
            {passwordError && <p className="error">{passwordError}</p>}
          </div>

          <div className="button-container">
            <button type="submit" className="login-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;