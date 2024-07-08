import React from "react";
import { person1, person2, person3, play } from "../assets";

const Testimonials = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-6 lg:py-8 relative lg:px-36">
        <div className="flex flex-col items-start gap-4 my-12">
          <h1 className="text-6xl font-semibold text-[#3D0072]">
            Don’t Take Our <span className="text-[#E8356D]">Word</span> For It
          </h1>
          <p className="text-[#3D0072]">
            Listen to testimonials from Ardilla users building wealth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10 py-6 mb-12">
          <div>
            <div className="group relative col-span-1 md:col-span-1 lg:col-span-2 items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-black/30 transform transition-transform hover:scale-105 duration-500">
              <img className="w-full h-full" src={person1} alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img src={play} alt="" />
              </div>
              <div className="absolute bottom-0 left-0 px-6 py-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-xl">MD - Miss Oyinye Dallas</h4>
                <p className="text-sm py-1">What is Ardila and it benefits?</p>
              </div>
            </div>
          </div>

          <div>
            <div className="group relative col-span-1 md:col-span-1 lg:col-span-2 items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-black/30 transform transition-transform hover:scale-105 duration-500">
              <img className="w-full h-full" src={person2} alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img src={play} alt="" />
              </div>
              <div className="absolute bottom-0 left-0 px-6 py-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-xl">MD - Miss Oyinye Dallas</h4>
                <p className="text-sm py-1">What is Ardila and it benefits?</p>
              </div>
            </div>
          </div>
          <div>
            <div className="group relative col-span-1 md:col-span-1 lg:col-span-2 items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-black/30 transform transition-transform hover:scale-105 duration-500">
              <img className="w-full h-full" src={person3} alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img src={play} alt="" />
              </div>
              <div className="absolute bottom-0 left-0 px-6 py-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-xl">MD - Miss Oyinye Dallas</h4>
                <p className="text-sm py-1">What is Ardila and it benefits?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
