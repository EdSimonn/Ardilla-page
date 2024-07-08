import React, { useState } from "react";
import { heroImg, logo } from "../assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#240053] text-white">
      {/* Navbar */}
      <nav className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-6 lg:py-8 lg:px-36">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Hamburger menu for small screens */}
          <button
            className="block sm:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <span className="text-white text-2xl">
                <MdClose />
              </span>
            ) : (
              <span className="text-white text-2xl">
                <RxHamburgerMenu />
              </span>
            )}
          </button>

          {/* Desktop menu */}
          <ul className="hidden sm:flex justify-between items-center gap-8 text-lg">
            <li>Products</li>
            <li>Business</li>
            <li>Company</li>
            <li>Learn</li>
          </ul>

          <div className="hidden sm:block">
            <button className="bg-[#8807F7] py-2 px-4 rounded-full">
              Create Account
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } p-6 bg-[#8807F7] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col mb-4">
            <li>Products</li>
            <li>Business</li>
            <li>Company</li>
            <li>Learn</li>
          </ul>

          <div>
            <button className="bg-[#240053] py-2 px-4 rounded-full">
              Create Account
            </button>
          </div>
        </div>
      </nav>

      <div className="container flex flex-col justify-center items-center mx-auto 2xl:max-w-[1240px] ss:p-10 p-4 pt-6 pb-0 lg:pt-8 lg:pb-0 ss:pb-0 sm:pb-0 text-center">
        <h1 className="text-6xl xs:text-5xl ss:text-6xl md:text-7xl font-semibold">
          Your Access To More
        </h1>
        <p className="text-xl xs:text-lg my-8 lg:px-36">
          Ardilla helps you save and invest in achieving your financial goals,
          we have the most flexible and seamless way to grow your funds
        </p>
        <button className="mt-6 px-6 py-3 border border-[#fff] bg-white rounded-full text-[#3D0072] hover:bg-[#3D0072] hover:text-white flex items-center justify-center space-x-2">
          Get Started
        </button>
        <div className="w-full flex justify-center">
          <img src={heroImg} alt="Hero" className="w-[90%] max-w-[800px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
