import React from 'react';
import LoaderImg from '../../images/loader.svg';

const Loader = () => {
  return (
    <div className="loader flex flex-col items-center justify-center py-16">
      <img src={LoaderImg} alt="loader" className="w-30" />
    </div>
  );
}

export default Loader;
