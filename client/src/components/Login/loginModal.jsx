
import React from 'react';
import Login from './Login';
import Logout from '../Logout/Logout';

const LoginModal = ({ token, setToken, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal} style={{ cursor: 'pointer' }}>&times;</span>
        <h2>{token ? 'Logout' : 'Login'}</h2>
        {token ? (
          <Logout setToken={setToken} closeModal={closeModal} />
        ) : (
          <Login setToken={setToken} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default LoginModal;