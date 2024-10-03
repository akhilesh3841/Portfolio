import React, { useState } from "react";
import { logo } from "./../assets";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <div className="w-full p-4 flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg">
      <img src={logo} alt="Logo" className="h-10" />

      <div className="hidden md:flex gap-6">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset to compensate for fixed navbar height
          duration={500}
          className="menuItem text-white hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={handleLinkClick} // Close menu on click
        >
          Home
        </Link>
        <Link
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menuItem text-white hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={handleLinkClick}
        >
          About Me
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menuItem text-white hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={handleLinkClick}
        >
          Skills
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menuItem text-white hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={handleLinkClick}
        >
          Projects
        </Link>
        <Link
          to="coding"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menuItem text-white hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={handleLinkClick}
        >
          Coding Profile
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menuItem text-white hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={handleLinkClick}
        >
          Contact Us
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        {!toggle ? (
          <svg
            onClick={() => setToggle(!toggle)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        ) : (
          <svg
            onClick={() => setToggle(!toggle)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      {toggle && (
        <div className="absolute top-16 right-0 w-full bg-white rounded-md shadow-lg md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li className="menuItem p-4 w-full text-center hover:bg-gray-100">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="menuItem p-4 w-full text-center hover:bg-gray-100">
              <Link
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer"
                onClick={handleLinkClick}
              >
                About Me
              </Link>
            </li>
            <li className="menuItem p-4 w-full text-center hover:bg-gray-100">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer"
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>
            <li className="menuItem p-4 w-full text-center hover:bg-gray-100">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li className="menuItem p-4 w-full text-center hover:bg-gray-100">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer"
                onClick={handleLinkClick}
              >
                Coding Profile
              </Link>
            </li>

            <li className="menuItem p-4 w-full text-center hover:bg-gray-100">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
