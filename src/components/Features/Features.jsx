import React from 'react';
import '../../App.css';
import element from '../../assets/Elements.png';
import easy from '../../assets/easy.png';
import organize from '../../assets/organiez.png';
import security from '../../assets/Security.png';

const Features = () => {
  return (
    <div className="max-w-[1470px] mx-auto mb-[55px]">
      <div className="flex justify-between">
        <div>
          <img src={element} alt="" />
        </div>
        <div className="w-[553px]">
          <h1 className="chivo text-[46px] font-bold text-second ">
            We provide features for your Business
          </h1>
          <div className="w-[536px] pt-[64px]">
            <div className="flex items-center justify-between">
              <div className="w-[220px]">
                <img src={easy} alt="" />
                <h3 className="chivo font-bold text-[22px] text-second pt-[14px] ">
                  Fast and Easy to use
                </h3>
                <p className="dm text-lg text-[#645E76] pt-[6px] ">
                  Easily to convert API with just a few clicks
                </p>
              </div>
              <div className="w-[220px]">
                <img src={security} alt="" />
                <h3 className="chivo font-bold text-[22px] text-second pt-[14px] ">
                Safely Security
                </h3>
                <p className="dm text-lg text-[#645E76] pt-[6px] ">
                All customer data is encrypted
                </p>
              </div>
            </div>
            <div className="flex items-end gap-x-[96px] pt-10">
              <div className="w-[220px]">
                <img src={organize} alt="" />
                <h3 className="chivo font-bold text-[22px] text-second pt-[14px] ">
                Get Organized
                </h3>
                <p className="dm text-lg text-[#645E76] pt-[6px] ">
                From lists to boards, organize work your way. 
                </p>
              </div>
              <div className='bg-[#3639A4] py-5 px-12 rounded-[6px]'>
                <a className=' dm text-lg text-primary font-medium'>Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
