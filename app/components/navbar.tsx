"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

// import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { IoMenuSharp } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const PathName = usePathname()
const routes =[ 
    {
        label:"Home",
        href:"/",
        active: PathName === "/"
    },
    {
        label:"Projects",
        href:"/projects",
        active: PathName === "/projects"
    },
    
    {
        label:"About",
        href:"/about",
        active: PathName === "/about"
    },
    {
        label:"Contact",
        href:"/contact",
        active: PathName === "/contact"
    },
   
]
  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-md shadow-slate-700 sticky top-0 z-50 w-full border-border/40 backdrop-blur-sm supports-[backdrop-filter]:bg-black/50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
        
          <div className=" flex items-center justify-center">
            <Link href="/" className="text-xl font-bold text-sky-500  ">
              MyLogo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center ">
            {routes.map((route)=>
            <Link href={route.href} className={route.active ? "text-sky-500 ml-4 font-bold hover:text-sky-500 ":"text-white ml-4 font-bold  hover:text-sky-500"} >
            {route.label}
            </Link>
          
            )}
          
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700   "
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <IoCloseSharp size={30} className="block  text-white" aria-hidden="true" />
              ) : (
                <IoMenuSharp size={30} className="block  text-white" aria-hidden="true" />
           

              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu  ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

          {routes.map((route)=>
            <Link onClick={toggleMenu} href={route.href} className={route.active ? "text-sky-500 ml-4 font-bold block  hover:text-sky-500 ":"text-white block ml-4 font-bold  hover:text-sky-500"} >
            {route.label}
            </Link>
          
            )}
            {/* <a href="#home" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#services" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

