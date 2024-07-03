import React, { useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, '').length === 0) {
      setSearchTerm('');
      setResultTitle('Please Enter Something ...');
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate('/book');
  };

  return (
    <div className='search-form'>
      <div className='container max-w-6xl'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex items-center bg-white rounded-full px-7 py-4'>
              <input
                type='text'
                className='form-control flex-grow text-xl px-4 py-2 border-2 border-gray-300 rounded-full'
                placeholder='Search...'
                ref={searchText}
              />
              <button
                type='submit'
                className='flex items-center justify-center ml-4'
              >
                <FaSearch className='text-purple text-2xl' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
