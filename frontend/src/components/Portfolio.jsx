import React from 'react';
import { data } from '../data.jsx';
import { Link } from 'react-scroll';

const Portfolio = () => {
  return (
    <div id='portfolio' className='mt-5 flex justify-center flex-col'>
      <div className='px-6 md:p-0 items-center justify-center'>
        <h1 className='font-bold text-4xl md:text-5xl text-center text-white'>
          My <span className='text-purple-400'>Projects</span>
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

        <div className='flex justify-center items-center gap-6 mt-6'>
          {data.map((item, index) => (
            <div key={index} className='p-2 bg-purple-100 rounded-lg m-2 flex flex-col shadow-md transition-transform hover:scale-105'>
              <img src={item.imageUrl} alt={item.title} className='h-48 md:h-52 object-cover rounded-lg' />
              <h1 className='font-bold text-sm md:text-base group-hover:text-pink-400 mt-2 text-center mb-2'>
                {item.title}
              </h1>
              <a
                href={item.projectUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg text-blue-500 underline hover:text-blue-700'
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
