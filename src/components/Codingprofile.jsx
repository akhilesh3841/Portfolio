import React from 'react';
import { profile } from '../data.jsx';
import { Link } from 'react-scroll';

const Codingprofile = () => {
  return (
    <div id='coding' className='mt-12 px-4 md:px-8'>
      <h1 className='font-bold text-4xl md:text-5xl text-center text-white mb-8'>
        My <span className='text-purple-400'>Coding Profiles</span>
      </h1>

         {/* Navigation to Home */}
         <Link
        to="home" // Replace with the ID of the section you want to scroll to
        spy={true}
        smooth={true}
        offset={-100} // Adjust offset to compensate for fixed navbar height
        duration={500} // Animation duration in milliseconds
        className="menuItem text-white hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
      >
      </Link>
      
      <div className='flex flex-col lg:flex-row justify-center lg:justify-between gap-8'>
        {profile.map((item) => (
          <div 
            key={item.id} 
            className='flex flex-col items-center content-center  p-6 rounded-lg shadow-lg transform transition-transform duration-300 bg-pink-200 hover:scale-105 w-full sm:w-1/2 lg:w-auto'
          >
            <img 
              src={item.image} 
              className=' w-[280px] h-48 md:h-52 object-cover rounded-lg' 
              alt={item.title}
            />
            <h2 className='text-2xl text-center font-bold text-white mb-2 hover:text-blue-500'>
              {item.title}
            </h2>
            <a 
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className='block text-center text-lg text-blue-500 underline hover:text-blue-300 transition-colors duration-300'
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Codingprofile;
