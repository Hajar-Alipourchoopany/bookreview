import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import purpleflower2 from '../../images/purpleflower2.png';

const Header = () => {
  return (
    <div
      className='holder'
      style={{
        backgroundImage: `url(${purpleflower2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <header className='header'>
        <Navbar />
        <div
          className='header-content flex flex-col items-center justify-center text-center text-black min-h-[75vh] bg-gradient-to-r from-purple-500 to-purple-700 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: 'url("../../images/library-img.jpg")' }}
        >
          <h2 className='header-title text-4xl md:text-3xl lg:text-3xl font-semibold capitalize'>
            What should you read among the countless books available today?
            <br /> What topics should a writer choose to write about?
          </h2>
          <br />
          <p className='header-text text-lg md:text-xl lg:text-2xl font-light mt-[-1.8rem] mb-[2.8rem] opacity-80 max-w-[770px]'>
            {' '}
            Find your book what you imagine !
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
