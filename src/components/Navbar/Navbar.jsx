import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUser, FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle scroll and change navbar background
  const changeBg = () => {
    if (window.scrollY >= 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener for scroll on component mount
  useEffect(() => {
    window.addEventListener('scroll', changeBg);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeBg);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${isScrolled ? 'bg-primary' : 'bg-transparent'
        } text-white body-font fixed top-0 w-full transition-all z-30 duration-300`}
    >
      <div className="w-full mx-auto flex flex-wrap p-5 md:px-3 lg:px-5 items-center justify-between">
        {/* Logo */}
        <a className="flex justify-center title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl md:text-lg lg:text-xl">Tailblocks</span>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FaBars className="text-white text-3xl" />
          </button>
        </div>

        {/* Main navigation - visible on medium and larger screens */}
        <nav className="hidden md:flex md:w-auto md:items-center uppercase space-x-6 text-[1rem] lg:text-lg">
          <NavLink
            to="/collections"
            className="block hover:text-gray-300 hover:cursor-pointer"
          >
            Collection
          </NavLink>
          <NavLink
            to="/newIn"
            className="block hover:text-gray-300 hover:cursor-pointer"
          >
            New In
          </NavLink>
          <NavLink
            to="/modiWeek"
            className="block hover:text-gray-300 hover:cursor-pointer"
          >
            Modiweek
          </NavLink>
          <NavLink
            to="/sustainability"
            className="block hover:text-gray-300 hover:cursor-pointer"
          >
            Sustainability
          </NavLink>
        </nav>

        {/* Icons section - visible on medium and larger screens */}
        <nav className="hidden md:flex lg:w-1/6 flex-wrap justify-around items-center text-base">
          <a className="hover:text-gray-300 flex justify-center md:justify-between items-center hover:cursor-pointer">
            <FaSearch className="text-lg lg:text-[24px]" />
          </a>
          <a className="hover:text-gray-300 flex justify-center items-center hover:cursor-pointer">
            <FaUser className="text-lg lg:text-[24px]" />
          </a>
          <a className="hover:text-gray-300 flex justify-center items-center hover:cursor-pointer">
            <FaHeart className="text-lg lg:text-[24px]" />
          </a>
          <a className="hover:text-gray-300 flex justify-center items-center hover:cursor-pointer">
            <FaShoppingCart className="text-lg lg:text-[24px]" />
          </a>
        </nav>
      </div>

      {/* Mobile Menu - visible only on small screens */}
      <nav className={`md:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col text-center p-5 bg-primary text-white">
          <NavLink
            to="/collections"
            className="block hover:text-gray-300 hover:cursor-pointer mb-3"
            onClick={() => setMenuOpen(false)}
          >
            Collection
          </NavLink>
          <NavLink
            to="/newIn"
            className="block hover:text-gray-300 hover:cursor-pointer mb-3"
            onClick={() => setMenuOpen(false)}
          >
            New In
          </NavLink>
          <NavLink
            to="/modiWeek"
            className="block hover:text-gray-300 hover:cursor-pointer mb-3"
            onClick={() => setMenuOpen(false)}
          >
            Modiweek
          </NavLink>
          <NavLink
            to="/sustainability"
            className="block hover:text-gray-300 hover:cursor-pointer mb-3"
            onClick={() => setMenuOpen(false)}
          >
            Sustainability
          </NavLink>
        </div>

        {/* Mobile Menu Icons */}
        <div className="flex justify-around items-center text-base p-5 bg-primary text-white">
          <a className="hover:text-gray-300 flex justify-center items-center hover:cursor-pointer">
            <FaSearch className=" text-xl lg:text-[24px]" />
          </a>
          <a className="hover:text-gray-300 flex justify-center items-center hover:cursor-pointer">
            <FaUser className=" text-xl lg:text-[24px]" />
          </a>
          <a className="hover:text-gray-300 flex justify-center items-center hover:cursor-pointer">
            <FaHeart className=" text-xl lg:text-[24px]" />
          </a>
          <a className="hover:text-gray-300 flex justify-center items-center hover:cursor-pointer">
            <FaShoppingCart className=" text-xl lg:text-[24px]" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
