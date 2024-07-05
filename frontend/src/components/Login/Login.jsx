import React, { useState } from 'react';
import axios from 'axios';

import { useAuth } from '../../context/AuthProvider';

const Login = ({ closeModal }) => {
  const { login } = useAuth();



const Login = ({ setToken, closeModal }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

    
      closeModal();
    } catch (error) {
      console.error('Error logging in', error);
      setError('Failed to log in.');
    }
  };

  return (

    <div className='bg-white p-6 rounded shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      <form onSubmit={handleSubmit} className='mb-4'>
        <label className='block text-gray-700'>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded'
          required
        />
        <label className='block text-gray-700'>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded'
          required
        />
        <button
          type='submit'
          className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-purple-900'
        >
          Login
        </button>

  
      </form>
    </div>
  );
};
}

export default Login;

