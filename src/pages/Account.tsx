import React from 'react';
import './Account.css';
import ProfilePic from '../assets/download2.jfif';
import CameraIcon from '../assets/images.jfif';

const Account: React.FC = () => {
  return (
    <div className="account-container">
      <div className="account-content">
        <h1 className="account-heading">Account Settings</h1>
        <div className="account-profile">
          <div className="profile-pic-container">
            <img 
              src={ProfilePic}
              alt="Profile" 
              className="profile-pic" 
            />
            <img 
              src={CameraIcon}
              alt="Camera" 
              className="camera-icon" 
            />
          </div>
          <div className="profile-info">
            <span className="profile-name">Marry Doe</span>
            <span className="profile-email">Marry@Gmail.Com</span>
          </div>
        </div>
        <div className="account-details">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Elit, Sed Diam Nonumy Eirmod Tempor 
            Invidunt Ut Labore Dolore Magna Aliquyam Erat, Sed Diam
          </p>
          <p className='borderlast'>----------------------------------------------------</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
