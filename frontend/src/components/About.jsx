import React from 'react';
import { AppText, aboutSection } from '../Constants';
import { wave, laptop } from '../assets/';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className='relative mt-36' id="aboutme">

      {/* Wave Background */}
      <img src={wave} className='absolute inset-0 w-full' alt='Wave Background' />

      {/* Main Content */}
      <div className='relative z-10 py-12 md:py-20 px-4 md:px-20 rounded-lg shadow-lg'>
        <h2 className='font-bold text-3xl md:text-5xl text-white text-center mb-4 md:mb-8'>{AppText.about}<span className='text-pink-400'> {AppText.me}</span></h2>
        <div className='text-white text-center text-sm md:text-lg mb-8 px-4 md:px-24 lg:px-32'>
          <p className='mt-10'>
            I'm Akhilesh and I'm a passionate learner from Varanasi. Currently pursuing Bachelor of Technology at Madan Mohan Malaviya University Of Technology, I have a keen interest in competitive programming and constantly strive to enhance my skills. I strongly believe in the power of teamwork for achieving success.
          </p>
        </div>
      </div>

      {/* About Sections */}
      <div className='flex flex-col md:flex-row justify-center items-center  md:mt-12 px-4 md:px-32 lg:m-[-80px]'>
        {aboutSection.map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center m-2 group hover:bg-purple-600 rounded-lg py-4 px-6 md:p-6'>
            <img src={item.image} alt={item.title} className='w-72 h-52 md:w-96 md:h-72 rounded-lg object-cover shadow-md' />
            <h1 className='font-bold text-xl md:text-2xl mt-4 text-center md:text-white'>{item.title}</h1>
            <p className='text-sm md:text-base text-gray-500 mt-2 px-4 text-center md:text-white-200'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 right-4">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out"
        >
        </Link>
      </div>

    </div>
  );
};

export default About;
