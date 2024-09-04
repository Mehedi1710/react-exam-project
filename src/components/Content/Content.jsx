import React from 'react';
import arrow1 from '../../assets/arrow-1.png';
import arrow2 from '../../assets/arrow2.png';
import icon1 from '../../assets/Icon.png';
import icon2 from '../../assets/Icon 2.png';
import icon3 from '../../assets/Icon 3.png';
import '../../App.css';

const Content = () => {
  return (
    <div className="w-[1300px] mx-auto my-[160px]">
      <div className="flex justify-between">
        <div className="w-[504px] ">
          <h1 className="text-second chivo font-bold text-[46px]">
            How simple is it to use our platform?
          </h1>
        </div>
        <div className="w-[530px]">
          <p className="dm text-lg text-[#645E76] ">
            This Innovate Con guide explores the most popular platforms and
            walks you through how to use them to grow your business.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[116px]">
        <div className="w-[300px]">
          <img src={icon1} alt="" className="m-auto" />
        </div>
        <div>
          <img src={arrow1} alt="" />
        </div>
        <div className="w-[300px]">
          <img src={icon2} alt="" className="m-auto" />
        </div>
        <div>
          <img src={arrow2} alt="" />
        </div>
        <div className="w-[300px]">
          <img src={icon3} alt="" className="m-auto" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-[300px] text-center pt-4">
          <h2 className="text-second chivo font-bold text-2xl pt-[26px]">
            Login or sign up to be able use our platform
          </h2>
          <p className="text-[#645E76] text-lg dm mt-3 ">
            This quickstart shows you how to use Identity Platform to sign in a
            user with an email and password.{' '}
          </p>
        </div>
        <div className="w-[300px] text-center pt-4">
          <h2 className="text-second chivo font-bold text-2xl pt-[26px]">
            Connect your website with just a few click
          </h2>
          <p className="text-[#645E76] text-lg dm mt-3 ">
            Once your website is online, you can configure it, I will show you
            how to put your website online
          </p>
        </div>
        <div className="w-[300px] text-center pt-4">
          <h2 className="text-second chivo font-bold text-2xl pt-[26px]">
            Take some sales data that you want
          </h2>
          <p className="text-[#645E76] text-lg dm mt-3 ">
            Sell your data directly: The most straightforward method is to sell
            your data directly to another
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
