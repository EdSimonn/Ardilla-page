import React from "react";
import { access1, access2, access3, access4 } from "../assets";

const Savings = () => {
  return (
    <div className="bg-[#1e0238] text-white">
      <div className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-6 lg:py-8 relative lg:px-36">
        <div className="text-left my-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Access More With Your Money
          </h1>
          <p className="md:w-3/4 w-full text-lg sm:text-xl md:text-lg mb-6">
            Earn, learn, parlay, and grow financially. With Ardilla, you have
            more opportunities than ever at your finger tips. Why not take
            advantage today?
          </p>
          <button className="hover:bg-[#43027E] bg-transparent border border-white rounded-full py-3 px-6 text-lg flex items-center justify-center space-x-2">
            <span>Learn more about savings</span>
          </button>
        </div>
        <div className="bg-[#2e014c] p-8 rounded-lg shadow-lg w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-start text-left p-6 rounded-lg shadow-lg hover:bg-[#43027E]">
            <img src={access1} alt="Access" className="mb-2" />
            <div className="px-4 sm:px-12">
              <h2 className="text-2xl font-bold mb-6">DIB</h2>
              <p className="text-lg mb-6 pr-0 sm:pr-12">
                Nothing beats an emergency quite like an emergency fund. With
                Ardilla you can get started building that emergency fund.
              </p>
              <a href="#" className="text-yellow-500 hover:underline">
                Learn More
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-start text-left p-6 rounded-lg shadow-lg hover:bg-[#43027E]">
            <img src={access2} alt="Access" className="mb-2" />
            <div className="px-4 sm:px-12">
              <h2 className="text-2xl font-bold mb-6">Dreams</h2>
              <p className="text-lg mb-6 pr-0 sm:pr-12">
                Helping you make your dreams a reality is important to us. We
                have helped so many others. We can help you as well.
              </p>
              <a href="#" className="text-pink-500 hover:underline">
                Learn More
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-start text-left p-6 rounded-lg shadow-lg hover:bg-[#43027E]">
            <img src={access3} alt="Access" className="mb-2" />
            <div className="px-4 sm:px-12">
              <h2 className="text-2xl font-bold mb-6">Vault</h2>
              <p className="text-lg mb-6 pr-0 sm:pr-12">
                Lock away excess funds you don't know what to do with. We can
                help you safeguard it till you are ready. It definitely beats
                spending it and wondering where all that money went to.
              </p>
              <a href="#" className="text-purple-500 hover:underline">
                Learn More
              </a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-start text-left p-6 rounded-lg shadow-lg hover:bg-[#43027E]">
            <img src={access4} alt="Access" className="mb-2" />
            <div className="px-4 sm:px-12">
              <h2 className="text-2xl font-bold mb-6">Grit</h2>
              <p className="text-lg mb-6 pr-0 sm:pr-12">
                Become a VIP when you save more money with us. Enjoy better
                benefits.
              </p>
              <a href="#" className="text-green-500 hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
