import React from 'react';

const Logout = ({ setToken, closeModal }) => {
  const handleLogout = () => {
  
    localStorage.removeItem('token');
   
    setToken(null);
   
    closeModal();
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
      Logout
    </button>
  );
};

export default Logout;