import React from 'react';
import { Link } from 'react-router-dom';

const Book = (book) => {
  return (
    <div className='book-item flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-md'>
      <div className='book-item-img mb-4'>
        <img
          src={book.cover_img}
          alt='cover'
          className='w-full h-64 object-cover rounded-lg'
        />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title font-semibold text-lg mb-2'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author text-sm mb-2'>
          <span className='font-semibold'>Author: </span>
          <span>{book.author}</span>
        </div>

        <div className='book-item-info-item edition-count text-sm mb-2'>
          <span className='font-semibold'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year text-sm mb-2'>
          <span className='font-semibold'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
