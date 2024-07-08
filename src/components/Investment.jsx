import React from "react";
import { bga } from "../assets";

const Investment = () => {
  return (
    <div
      className="bg-white md:bg-contain md:bg-no-repeat md:bg-center h-[36rem] relative"
      style={{ backgroundImage: `url(${bga})` }}
    >
      <div className="">
        <div className="container mx-auto max-w-screen-xl ss:p-10 p-4 py-6 lg:py-8 relative lg:px-36">
          <div className="lg:w-3/4 text-left items-center lg:text-left relative z-10 pt-10">
            <h1 className="text-6xl font-bold text-[#3D0072]">
              Unlimited <span className="text-[#00A789]">Investment</span>
            </h1>
            <h1 className="text-6xl font-bold text-[#00A789] mt-2">
              Opportunities
            </h1>
            <p className="text-[#3D0072] mt-6 text-xl leading-loose w-3/4">
              Plan towards your future by investing with Ardilla. Grow your
              money confidently and securely with the available investment
              opportunities.
            </p>
            <button className="mt-6 px-6 py-3 border border-[#3D0072] rounded-full text-[#3D0072] hover:bg-[#3D0072] hover:text-white flex items-center justify-center space-x-2">
              <span>Invest with Ardilla (Coming Soon)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
