import React from 'react';

const Conclusion = () => {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-center my-8">Conclusion Show graphicallys</h1>
      <h2 className="text-2xl text-center my-4">Review Count and Ratings for Popular Books</h2>
      <p className="text-lg text-center my-4">
        "Based on our analysis, we recommend the following topics."
      </p>
      <div className="flex flex-col items-center my-8">
        {/* Example list of recommended topics */}
        <div className="bg-gray-200 w-2/3 p-4 rounded-lg shadow-md my-4">
          <h3 className="text-xl font-semibold text-center">List of Recommended Topics</h3>
          <ul className="list-disc pl-6">
            <li>Self-Development</li>
            <li>Psychology</li>
            <li>Science Fiction</li>
            {/* Additional topics */}
          </ul>
        </div>
        {/* Example target reader infographic */}
        <div className="bg-gray-200 w-2/3 p-4 rounded-lg shadow-md my-4">
          <h3 className="text-xl font-semibold text-center">Target Readers</h3>
          {/* Infographic image or component */}
        </div>
      </div>
      <p className="text-lg text-center my-4">
        "These topics are popular among readers and have a high chance of success."
      </p>
    </div>
  );
};

export default Conclusion;
