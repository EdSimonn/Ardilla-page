import React from "react";
import { fImg, fb, insta, linkedin, xtwitter, fBg } from "../assets"; // Ensure you have the correct path to the image

const Footer = () => {
  return (
    <div className="relative bg-[#8807F7] pt-10  mt-64 sm:pt-16 sm:mt-44">
      {/* Floating Banner */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg px-10 pt-10 text-center z-20 w-11/12 sm:w-3/4"
        style={{
          backgroundImage: `url(${fBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:gap-24 gap-6 items-center justify-center text-white">
          <div className="items-start text-left sm:pt-0 pt-6 pb-12">
            <h1 className="text-4xl font-bold mb-6">
              Download for free <br /> Start saving Today
            </h1>
            <button className="mt-6 px-6 py-3 border border-[#fff] bg-white rounded-full text-[#3D0072] hover:bg-[#3D0072] hover:text-white flex items-center justify-center space-x-2">
              Download for free
            </button>
          </div>
          <div className="mt-8">
            <img src={fImg} alt="Download" className="mx-auto" />
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto h-full w-full max-w-screen-xl ss:p-10 p-4 py-6 lg:py-8 relative lg:px-36 mt-64 lg:mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-6">
          <div>
            <h3 className="text-white font-bold text-xl">Products</h3>
            <ul className="mt-3 text-[#bdc5ca] text-gl md:text-lg gap-6">
              <li>Savings</li>
              <li>Dilla</li>
              <li>Financial Coach</li>
              <li>Halal</li>
              <li className="">
                Budgetting
                <span className="text-xs border rounded-full py-1 px-2 ml-2">
                  Coming Soon
                </span>
              </li>
              <li>
                Investment
                <span className="text-xs border rounded-full py-1 px-2 ml-2">
                  Coming Soon
                </span>
              </li>
              <li>
                Insurance
                <span className="text-xs border rounded-full py-1 px-2 ml-2">
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl">Company</h3>
            <ul className="mt-3 text-[#bdc5ca] text-sm md:text-base">
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl">Transparency</h3>
            <ul className="mt-3 text-[#bdc5ca] text-sm md:text-base">
              <li>Terms & Conditions</li>
              <li>Information Security Policy</li>
              <li>Privacy Policy</li>
              <li>Interest Tool</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">Developers</h3>
            <ul className="mt-3 text-[#bdc5ca] text-sm md:text-base">
              <li>
                Connect API
                <span className="text-xs border rounded-full py-1 px-2 ml-2">
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="pb-4">
              <h3 className="text-white font-bold text-xl">Address</h3>
              <ul className="mt-3 text-[#bdc5ca] text-sm md:text-base">
                33B, Ogundana street, Allen, Ikeja.
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-xl">Contact</h3>
              <ul className="mt-3 text-[#bdc5ca] text-sm md:text-base">
                <li>support@ardilla.africa</li>
                <li>(234)801 000 1234</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-start">
            <span className="text-md text-white sm:text-center">
              © 2023 Ardilla. All Rights Reserved.
            </span>
            <span className="py-5 text-white text-sm">
              Ardilla operates under the coorperative license of Ardilla
              Multipurpose Cooperative Society, LSC 18245, We provide Savings
              and Fixed deposit services to our users
            </span>
          </div>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4">
            <div className="">
              <img src={insta} alt="Instagram" />
            </div>
            <div className="">
              <img src={fb} alt="Facebook" />
            </div>
            <div className="">
              <img src={linkedin} alt="LinkedIn" />
            </div>
            <div className="">
              <img src={xtwitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
