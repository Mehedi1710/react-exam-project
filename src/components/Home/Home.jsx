import React from 'react';
import Navbar from '../Navbar/Navbar';
import laptop from '../../assets/laptop.png';

const Home = () => {
  return (
    <div className="bg-banner bg-cover bg-no-repeat bg-center">
      <Navbar />
      <div className="w-[1410px] mx-auto">
        <div className="max-w-[796px] mx-auto text-center mt-[98px]">
          <h1 className="chivo font-bold text-[56px] text-primary ">
            Get your work done with Management Tool
          </h1>
          <p className="mt-5 dm text-lg text-primary w-[467px] mx-auto ">
            The world's first project management platform that connects
            everything
          </p>
          <div className="w-[480px] mx-auto bg-primary flex justify-between items-center rounded-[6px] mt-8">
            <p className="text-base chivo font-normal text-[#B4B6C4] pl-6 ">
              Your business email
            </p>
            <div className="py-2 pr-2">
              <button className="bg-[#43E7DF] py-[14px] px-7 rounded-lg dm font-medium text-lg text-[#2C2643] ">
                Try for free
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[98px] mr-[110px]">
          <img src={laptop} alt="" width={1200}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
