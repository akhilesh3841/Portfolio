import React from 'react';
import { skill } from './../assets';
import { AppText, skillsList } from '../Constants';
import { Link } from 'react-scroll';


const Skills = () => {
  return (
    <div id='skills' className='mt-[70px] px-4 md:px-20'>

      {/* Title Section */}
      <div className='flex flex-row justify-center items-center'>
        <img src={skill} className='w-12 md:w-16 lg:w-20 hover:animate-bounce' alt='Skill Icon' />
        <h1 className='font-bold text-3xl md:text-5xl text-white ml-4'>
          {AppText.Skills}<span className='text-purple-600'>{AppText.Experties}</span>
        </h1>
      </div>

      {/* Skills Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-8'>
        {skillsList.map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center bg-purple-50 p-4 rounded-lg hover:scale-105 transition duration-300 ease-in-out'>
            <img src={item.icon} alt={item.title} className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 md:mb-4 lg:mb-6 hover:scale-110' />
            <p className='text-xs md:text-sm lg:text-base text-gray-700 mt-2 text-center transition duration-300 hover:text-white hover:underline'>{item.title}</p>
          </div>
        ))}
      </div>


            {/* Navigation to Home */}
            <Link
        to="home" // Replace with the ID of the section you want to scroll to
        spy={true}
        smooth={true}
        offset={-90} // Adjust offset to compensate for fixed navbar height
        duration={500} // Animation duration in milliseconds
        className="menuItem text-white hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
      >
      </Link>
      

      {/* Skill Bars */}
      <div className='flex flex-col gap-5 mt-8'>
        {[
          { title: 'HTML', level: '90%' },
          { title: 'CSS', level: '85%' },
          { title: 'JavaScript', level: '80%' },
          { title: 'Github', level: '75%' },
          { title: 'MongoDB', level: '70%' },
          { title: 'React.js', level: '85%' },
          { title: 'Node.js', level: '75%' },
          { title: 'Express.js', level: '70%' },
        ].map((skill, index) => (
          <div key={index} className='flex items-center gap-4'>
            <p className='min-w-[150px] text-xl font-medium text-white'>{skill.title}</p>
            <div className='w-full bg-gray-300 h-4 rounded-full'>
              <div className='bg-gradient-to-r from-yellow-500 to-purple-500 h-full rounded-full transition-all duration-300' style={{ width: skill.level }}>
              </div>
              
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
