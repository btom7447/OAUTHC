import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ProfileMenu = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="profile-menu">
      <input type="text" placeholder="Username" />
      <div className="password-input">
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Password"
        />
        <FontAwesomeIcon
          icon={passwordVisible ? faEye : faEyeSlash}
          onClick={togglePasswordVisibility}
          className="toggle-password-icon"
        />
      </div>
      <button className='signin-button'>Sign In</button>
      <button className='create-account-button'>Create Account</button>
    </div>
  );
};

export default ProfileMenu;
