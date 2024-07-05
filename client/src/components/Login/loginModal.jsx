
import React from 'react';
import Login from './Login';
import Logout from '../Logout/Logout';
import { useAuth } from '../../context/AuthProvider';

const LoginModal = ({ closeModal }) => {
  const { isLoggedIn } = useAuth();

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span
          className='close'
          onClick={closeModal}
          style={{ cursor: 'pointer' }}
        >
          &times;
        </span>
        <h2>{isLoggedIn ? 'Logout' : 'Login'}</h2>
        {isLoggedIn ? (
          <Logout closeModal={closeModal} />
        ) : (
          <Login closeModal={closeModal} />

        )}
      </div>
    </div>
  );
};


export default LoginModal;
