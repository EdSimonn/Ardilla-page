import React, { useRef } from "react";
import {
  arrow2,
  sHead,
  sImg1,
  sImg2,
  sImg3,
  sImg4,
  sImg5,
  sImg6,
  sImg7,
  sImg8,
} from "../assets";

const Expected = () => {
  // Ref for accessing the slider container
  const sliderRef = useRef(null);

  // Function to scroll the slider left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  // Function to scroll the slider right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };
  return (
    <div className="container sm:flex justify-between items-center mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-6 lg:py-8 lg:px-36 text-white">
      <div className="flex flex-col">
        <div>
          <img src={sHead} alt="" />
        </div>

        <div className="flex mt-4 justify-end">
          <img src={arrow2} onClick={scrollRight} />
        </div>
        <div
          className="container px-4 py-8 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
          ref={sliderRef}
        >
          <div className="flex space-x-4">
            <div className="relative flex-shrink-0 max-w-full">
              <img src={sImg1} alt="" className="max-w-full" />
              <div className="absolute top-0 left-0 w-3/4 p-9">
                <p className="m-0 text-lg font-semibold w-full whitespace-break-spaces">
                  Access to more financial tools
                </p>
              </div>
            </div>

            <div className="relative flex-shrink-0 max-w-full">
              <img src={sImg2} alt="" className="max-w-full" />
              <div className="absolute top-0 left-0 w-3/4 p-9">
                <p className="m-0 text-lg font-semibold w-full whitespace-break-spaces">
                  More investment opportunities
                </p>
              </div>
            </div>

            <div className="relative flex-shrink-0 max-w-full">
              <img src={sImg3} alt="" className="max-w-full" />
              <div className="absolute top-0 left-0 w-3/4 p-9">
                <p className="m-0 text-lg font-semibold w-full whitespace-break-spaces">
                  More Savings
                </p>
              </div>
            </div>

            <div className="relative flex-shrink-0 max-w-full">
              <img src={sImg4} alt="" className="max-w-full" />
              <div className="absolute top-0 left-0 w-3/4 p-9">
                <p className="m-0 text-lg font-semibold w-full whitespace-break-spaces">
                  Join a passionate wealth building community
                </p>
              </div>
            </div>

            <div className="relative flex-shrink-0 max-w-full">
              <img src={sImg5} alt="" className="max-w-full" />
              <div className="absolute top-0 left-0 w-3/4 p-9">
                <p className="m-0 text-lg font-semibold w-full whitespace-break-spaces">
                  Free financial advice from vetted financial coaches
                </p>
              </div>
            </div>

            <div className="relative flex-shrink-0 max-w-full">
              <img src={sImg6} alt="" className="max-w-full" />
              <div className="absolute top-0 left-0 w-3/4 p-9">
                <p className="m-0 text-lg font-semibold w-full whitespace-break-spaces text-[#019A34]">
                  Build wealth without compromising your belief
                </p>
              </div>
            </div>

            <div className="relative flex-shrink-0 max-w-full">
              <img src={sImg7} alt="" className="max-w-full" />
              <div className="absolute top-0 left-0 w-3/4 p-9">
                <p className="m-0 text-lg font-semibold w-full whitespace-break-spaces">
                  Pro budgeting guide
                </p>
              </div>
            </div>

            <div className="relative flex-shrink-0 max-w-full">
              <img src={sImg8} alt="" className="max-w-full" />
              <div className="absolute top-0 left-0 w-3/4 p-9">
                <p className="m-0 text-lg font-semibold w-full whitespace-break-spaces">
                  Get your unique SanID
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expected;
