import React from 'react';
import { AppText, socialNetwork } from '../Constants';

const Footer = () => {
  return (
    <div className='bg-gray-200 mt-10 py-10 px-4 md:px-20 flex flex-col items-center'>

      {/* Social Media Icons Section */}
      <div className='flex gap-4 mb-4'>
        {socialNetwork.map((item, index) => (
          <a key={index} href={item.link} target='_blank' rel='noopener noreferrer' className='hover:opacity-75 transition-opacity'>
            <img src={item.logo} alt={item.name} className='w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300' />
          </a>
        ))}
      </div>

      {/* Copyright Text Section */}
      <h1 className='text-gray-500 text-sm md:text-base'>{AppText.copywriteText}</h1>

    </div>
  );
};

export default Footer;
