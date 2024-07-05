import React, { useContext, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem('userData')
  );

  useEffect(() => {
    const token = Cookies.get('token');
    if (token && !userData) {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
        setIsLoggedIn(true);
      }
    }
  }, [userData]);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/users/login',
        { email, password },
        { withCredentials: true }
      );
      setUserData(response.data);
      localStorage.setItem('userData', JSON.stringify(response.data));
      console.log('User data after login:', response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed');
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        'http://localhost:8000/users/logout',
        {},
        { withCredentials: true }
      );
      setUserData(null);
      localStorage.removeItem('userData');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const values = {
    userData,
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
