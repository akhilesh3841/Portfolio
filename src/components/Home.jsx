import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import profile from "../assets/profile.png"
import { AppText } from './../Constants';
import { ReactTyped } from 'react-typed';

const Home = () => {
  const handleLinkClick = () => {
    // Implement your logic here if needed
  };

  return (
    <div id='home' className='mt-10 px-4 md:px-20 flex items-center flex-col md:flex-row'>
      <div className='md:w-1/2 md:pr-12'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>{AppText.hello}</h1>
        <h1 className='text-4xl md:text-4.5xl font-bold text-purple-400 mb-4'>{AppText.Iam} {AppText.RahulSanap}</h1>
        <h1 className=' text-3xl text-white'>And I'm    
          <ReactTyped
          className='text-3xl text-red-300 ml-2'
          strings={["Programmer","Developer"]}
          typeSpeed={50}
          backSpeed={50}
          loop={true}
          />
        </h1>
        <a
          href="https://drive.google.com/file/d/1ZBRei96yi9c6eZl4-GIk3LCYDoJuErjq/view?usp=drive_link" // Replace with the actual URL of your resume
          target="_blank" // Opens the resume in a new tab
          rel="noopener noreferrer" // Security measure for external links
          className='bg-purple-600 mt-4 px-4 py-2 text-white rounded-lg transition-all ease-out hover:scale-105 inline-block'
        >
          Resume
          </a>

      </div>
      <div className='md:w-1/2 mt-6 md:mt-0'>
        <img src={profile} alt='Home' className='w-full md:max-w-md shadow-lg object-cover' style={{ maxHeight: '530px' }} />
      </div>
    </div>
  );
};

export default Home;
