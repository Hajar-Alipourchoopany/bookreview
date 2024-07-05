import React, { useState } from 'react';
import { useAuth } from '../../context/AuthProvider';

const Login = ({ closeModal }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      closeModal();
    } catch (error) {
      console.error('Error logging in', error);
      setError('Failed to log in.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-md max-w-sm w-full mx-2">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-purple-900 w-full"
          >
            Login
          </button>
        </form>
        <button
          onClick={closeModal}
          className="text-gray-500 hover:text-gray-700 mt-2 underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;


