import React from 'react';
import SignUp from './SignUp';

const SignUpModal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal} style={{ cursor: 'pointer' }}>&times;</span>
        <h2>Sign Up</h2>
        <SignUp closeModal={closeModal} />
      </div>
    </div>
  );
};

export default SignUpModal;