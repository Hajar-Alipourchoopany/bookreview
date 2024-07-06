import React from 'react';
import womenImage from '../../images/women2.png'; 
import menImage from '../../images/men.png'; 

const ReaderReactions = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
       
        <div className="text-lg">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-700 animate-grow">
        Conclusion and Recommended Topics
          </h2>
        
          <div className="flex flex-wrap justify-center mb-10">
            <div className="w-full md:w-1/3 p-4 text-center">
              <video className="w-3/4 mx-auto rounded-lg shadow-lg border-4 border-gray-500" controls autoPlay>
                <source src="/video/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center">
              <video className="w-3/4 mx-auto rounded-lg shadow-lg border-4 border-gray-500" controls autoPlay>
                <source src="/video/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center">
              <video className="w-3/4 mx-auto rounded-lg shadow-lg border-4 border-gray-500" controls autoPlay>
                <source src="/video/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 p-4 text-center">
              <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
              <p className="mb-4 text-gray-700">This book is truly fascinating. The author's writing style is very unique, and the plot develops quickly, so there are no boring moments. The characters are very charming and realistically portrayed, allowing readers to deeply empathize with their emotions. While reading this book, I completely lost track of time. I can only highly recommend it!</p><br />
              <img className="w-16 h-16 rounded-full mx-auto mb-4 shadow-lg" src={womenImage} alt="women" />
              <p className="text-gray-800 font-semibold">Birigitte Müller</p>
            </div>
            <div className="w-full md:w-1/2 p-4 text-center">
              <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
              <p className="mb-4 text-gray-700">This book exceeded my expectations. At first, I found it a bit boring, but after a few pages, I was completely immersed in the story. The backgrounds and situations carefully described by the author made me believe I was actually there. Additionally, the plot twist was very impressive, keeping me intrigued until the end. After reading this book, it left a lasting impression on me</p>
              <img className="w-16 h-16 rounded-full mx-auto mb-4 shadow-lg object-cover" src={menImage} alt="men" />
              <p className="text-gray-800 font-semibold">Thomas Schoßler</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReaderReactions;





