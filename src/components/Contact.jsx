import React from 'react';
import contact from '../assets/contactusbg.png';

const Contact = () => {
  return (
    <div className='mt-10' id="contact">
      {/* Contact Title */}
      <div className='text-center'>
        <h1 className='font-bold text-4xl md:text-5xl text-white'>
          Contact<span className='text-purple-400'> Us</span>
        </h1>
      </div>

      {/* Contact Form Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-evenly px-4 md:p-20'>
        {/* Image Section */}
        <img src={contact} alt='Contact Us' className='w-full md:w-[400px] mx-auto md:mr-0 md:ml-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300' />

        {/* Form Section */}
        <form action='https://getform.io/f/bolggjga' method='POST' className='w-full flex flex-col justify-center'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email' className='text-gray-400'>Email</label>
            <input id='email' name='email' type='email' placeholder='yourname@gmail.com' className='border-2 px-3 py-2 border-purple-300 hover:border-purple-500 rounded-md focus:outline-none focus:border-purple-500 transition duration-300' required />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='message' className='text-gray-400'>Message</label>
            <textarea id='message' name='message' rows={7} placeholder='Type Your message here' className='border-2 px-3 py-2 border-purple-300 hover:border-purple-500 rounded-md focus:outline-none focus:border-purple-500 transition duration-300' required />
          </div>

          <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition-all ease-in-out hover:scale-105 mt-2'>
            Submit
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='ml-2 w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
