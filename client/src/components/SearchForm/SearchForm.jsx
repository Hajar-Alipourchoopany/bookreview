import React, { useRef, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './SearchForm.css';

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    console.log(tempSearchTerm);
    if (tempSearchTerm.replace(/[^\w\s]/gi, '').length === 0) {
      setSearchTerm('');
      setResultTitle('Please Enter Something ...');
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate('/book');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='search-form'>
      <div 
        className={`container max-w-6xl ${isHovered ? 'animate-paused' : 'animate-rotate'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex items-center bg-white rounded-full px-7 py-4'>
              <input
                type='text'
                className='form-control flex-grow text-xl px-4 py-2 border-2 border-gray-900 rounded-full'
                placeholder='Search for books...'
                ref={searchText}
              />
              <button
                type='submit'
                className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='ml-4' style={{ color: 'purple' }} size={30} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
