import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context';

const SmallMenu = () => {
  // const { handleLinkClick } = useContext(AppContext);

  return (
    <div className="flex justify-center">
      <Link to="/" className="mr-2 hover:text-purple-500" onClick={() => handleLinkClick('/')}>
        Home |
      </Link>
      <Link
        to="/PopularTopics"
        className="mr-2 hover:text-purple-500"
        onClick={() => handleLinkClick('/PopularTopics')}
      >
        Popular Topics |
      </Link>
      <Link
        to="/ReaderReactions"
        className="mr-2 hover:text-purple-500"
        onClick={() => handleLinkClick('/ReaderReactions')}
      >
        Reader Reaction |
      </Link>
      <Link
        to="/Conclusion"
        className="mr-2 hover:text-purple-500"
        onClick={() => handleLinkClick('/Conclusion')}
      >
        Conclusion |
      </Link>
    </div>
  );
};

export default SmallMenu;

