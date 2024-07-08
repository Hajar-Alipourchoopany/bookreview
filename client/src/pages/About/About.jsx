import React from 'react';
import aboutimg from '../../images/about-img.jpeg';
import logoImg from '../../images/logo.png';

const About = () => {
  return (
    <section className='about h-screen bg-gradient-to-b from-gray-600 to-purple-200 text-gray-900 flex flex-col justify-between'>
      <div className='container mx-auto flex flex-col md:flex-row items-center'>
        <div className='about-img md:w-1/2'>
          <img src={aboutimg} alt="About BookHub" className='w-full h-full mt-10 object-cover rounded-lg shadow-lg' />
        </div>
        <div className='about-text md:w-1/2 md:ml-8'>
          <h2 className='text-4xl md:text-3xl font-semibold tracking-wide mt-14 '>
            About Hajar&Clara co.Publishing
          </h2>
          
          <h2 className='text-xl md:text-base leading-relaxed mt-2 mb-1'><strong>Our Company Overview </strong>
            </h2>
            <p>
            <strong>Established:</strong> July 7, 2024<br />
            Main Activities: Analyzing sales and reader data to provide customized content and operating programs that connect authors and readers.<br />
         
            <strong>1. Sales Data Analysis<br /></strong>
            Data Collection: Online/offline bookstores, own publishing platform, marketing campaign data<br />
            Analysis Tools: Tableau, Power BI, Google Cloud AI, AWS AI Services<br />
            Analysis Methods: Sales trend analysis, marketing effectiveness analysis, customer segmentation<br />
          
            <strong>2. Reader Data Analysis</strong>
            Data Collection: Reading habits, reviews, social media data<br />
            Analysis Tools: Google Cloud Natural Language, IBM Watson<br />
            Analysis Methods: Reading pattern analysis, sentiment analysis, personalized book recommendations<br />
         
            <strong>3. Real-time Data Analysis and Dashboard</strong>
            Real-time Dashboard: Monitoring sales and reader data<br />
            Alert System: Sending alerts when specific conditions are met<br />

            <strong>4. Predictive Analysis</strong><br />
            Demand Forecasting: Predicting book demand using AI<br />
            Trend Forecasting: Predicting reader interests and market trends
          </p>
          <footer className='text-black py-2 mt-2'>
          <br />
            <div className='flex mt-5 ml-20'>
            
              <div>
                
                <img src={logoImg} alt='site logo' className='w-8 ml-12' />
              </div>
              <div>
                <p className='ml-4 text-sm'>© 2024 Hajar&Clara co.Publishing. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default About;







