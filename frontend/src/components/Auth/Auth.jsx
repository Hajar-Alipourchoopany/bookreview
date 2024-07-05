import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const Auth = ({ closeModal, setUser }) => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="modal" role="dialog" aria-modal="true">
      {showLogin ? (
        <Login closeModal={closeModal} setUser={setUser} />
      ) : (
        <SignUp closeModal={closeModal} showLogin={toggleForm} />
      )}
      <button onClick={toggleForm} className="mt-4" aria-pressed={!showLogin}>
        {showLogin ? 'Go to Signup' : 'Go to Login'}
      </button>
    </div>
  );
};

Auth.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired, 
};

export default Auth;