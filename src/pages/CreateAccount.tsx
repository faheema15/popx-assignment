import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
  });
  const [selectedAgency, setSelectedAgency] = useState<'yes' | 'no'>('yes');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const validateEmail = (email: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = (password: string) =>
    password.length >= 8 && /[A-Za-z]/.test(password) && /[0-9]/.test(password);
  const validatePhoneNumber = (phone: string) => /^\d{10}$/.test(phone);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorList: Record<string, string> = {};

    if (!formData.fullName.trim()) errorList.fullName = 'Full Name is required';
    if (!formData.phoneNumber.trim() || !validatePhoneNumber(formData.phoneNumber)) errorList.phoneNumber = 'Enter a valid 10-digit phone number';
    if (!formData.emailAddress.trim() || !validateEmail(formData.emailAddress)) errorList.emailAddress = 'Enter a valid email address';
    if (!formData.password.trim() || !validatePassword(formData.password)) errorList.password = 'Password must be at least 8 characters with letters & numbers';

    if (Object.keys(errorList).length > 0) {
      setErrors(errorList);
    } else {
      console.log('Form submitted:', formData);
      navigate('/account');
    }
  };

  return (
    <div className="create-account-container">
      <form onSubmit={handleSubmit} className="create-account-form">
        <h2 className="create-account-title">Create your <br /> PopX account</h2>

        <div className="form-group">
          <label htmlFor="fullName">Full Name<span className="required">*</span></label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number<span className="required">*</span></label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="emailAddress">Email Address<span className="required">*</span></label>
          <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} />
          {errors.emailAddress && <p className="error">{errors.emailAddress}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password<span className="required">*</span></label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange} />
        </div>

        <div className="popx-agency-radio-container">
          <p className="popx-agency-question">Are you an Agency?<span className="required">*</span></p>
          <div className="popx-agency-radio-group">
            <label htmlFor="popx-agency-yes" className={`popx-agency-radio-label ${selectedAgency === 'yes' ? 'selected' : ''}`}>
              <input id="popx-agency-yes" type="radio" name="isAgency" value="yes" checked={selectedAgency === 'yes'} onChange={() => setSelectedAgency('yes')} />
              <span>Yes</span>
            </label>
            <label htmlFor="popx-agency-no" className={`popx-agency-radio-label ${selectedAgency === 'no' ? 'selected' : ''}`}>
              <input id="popx-agency-no" type="radio" name="isAgency" value="no" checked={selectedAgency === 'no'} onChange={() => setSelectedAgency('no')} />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="button-container">
          <button type="submit" className="create-account-btn">Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
