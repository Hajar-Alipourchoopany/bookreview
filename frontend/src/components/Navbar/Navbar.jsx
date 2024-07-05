import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import SmallMenu from '../SmallMenu/SmallMenu.jsx';
import SignUpModal from '../SignUp/SignUpModal.jsx';

import LoginModal from '../Login/loginModal.jsx';
import { useAuth } from '../../context/AuthProvider.jsx';

const Navbar = () => {
  const { isLoggedIn, userData, logout } = useAuth();
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };
  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };
  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };



  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (

    <nav className='navbar py-6 px-6 shadow-md bg-blue-50' id='navbar'>
      <div className='container flex items-center justify-between'>
        <div className='brand-and-toggler flex items-center'>
          <Link to='/' className='navbar-brand flex items-center'>

            <div>
              <img src={logoImg} alt='site logo' className='w-16 ml-8' />
              <span className='font-bold text-xs ml-'>
                Hajar&Clara co.Publishing
              </span>
            </div>

            <span className='font-bold flex justify-center text-5xl ml-16 pl-20'>
              Popular Book Reviews 2024
            </span>
          </Link>
        </div>
        <div className='flex items-center ml-auto'>
          <button
            type='button'
            className='navbar-toggler-btn'
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{ color: `${toggleMenu ? '#010101' : '#010101'}` }}
            />
          </button>
        </div>

        <div
          className={`navbar-collapse ${
            toggleMenu ? 'block' : 'hidden'
          } md:flex md:items-center md:h-full md:w-auto md:bg-transparent md:p-0 md:transform-none md:justify-end mt-4 md:mt-0 md:ml-4`}
        >
          <ul className='navbar-nav md:flex'>
            <li
              className={`nav-item ${toggleMenu ? 'block' : 'hidden'} md:ml-4`}
            >
              <Link
                to='/'
                className='nav-link text-black text-sm font-semibold tracking-wide hover:text-purple-600'
              >

                Home
              </Link>
            </li>
            <li
              className={`nav-item ${toggleMenu ? 'block' : 'hidden'} md:ml-4`}
            >
              <Link
                to='/about'
                className='nav-link text-black text-sm font-semibold tracking-wide hover:text-purple-600'
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex justify-center'>
          <SmallMenu />
          {isLoggedIn ? (
            <div className='flex items-center'>
              <span className='nav-link text-black text-sm font-semibold tracking-wide ml-20'>
                Welcome, {userData.username}
              </span>
              <button
                onClick={logout}
                className='nav-link text-black text-sm font-semibold tracking-wide hover:text-purple-900 ml-4'
              >
                Logout
              </button>
            </div>
          ) : (
            <ul className='flex'>
              <li
                className={`nav-item ${
                  toggleMenu ? 'hidden' : 'block'
                } md:ml-4`}
              >
                <Link
                  to='#'
                  onClick={openSignUpModal}
                  className='nav-link ml-20 text-black text-sm font-semibold tracking-wide hover:text-purple-900'
                >
                  Signup
                </Link>
              </li>
              <li
                className={`nav-item ${
                  toggleMenu ? 'hidden' : 'block'
                } md:ml-4`}
              >
                <Link
                  to='#'
                  onClick={openLoginModal}
                  className='nav-link text-black text-sm font-semibold tracking-wide hover:text-purple-900'
                >
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
      {isSignUpModalOpen && <SignUpModal closeModal={closeSignUpModal} />}

    </nav>
  );
};

export default Navbar;
