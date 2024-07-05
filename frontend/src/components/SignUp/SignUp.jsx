import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ setToken, closeModal }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = 'http://localhost:3000/auth/Login';
      const response = await axios.post(apiUrl, { username, email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      closeModal();
    } catch (err) {
      console.error ('Error logging in', error)
      setError('Failed to sign up.');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
    <h2 className="text-2xl font-bold mb-4">SignUp</h2>
    <form onSubmit={handleSubmit} className="mb-4">
        <label className="block text-gray-700">username</label>
        
        <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded"
        required 
        />
        <label>Email:</label>
        <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded"
        required 
        />
    
        <label>Password:</label>
        <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded"
        required 
        />
      <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-purple-900">
        Sign Up
      </button>
    </form>
    </div>
  );
};

export default SignUp;
