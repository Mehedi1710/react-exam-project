import React from 'react';
import brand from '../../assets/Brand-Logo.png';
import logo from '../../assets/ellips.png'

const Integration = () => {
  return (
    <div className="bg-[#F4FAFA] pt-[100px] pb-5">
      <div className="max-w-[1565px] mx-auto">
        <div className="flex justify-between items-center">
          <div className='flex items-end'>
            <img src={logo} alt="" />
            <div className="max-w-[587px]">
              <div>
                <h3 className="dm font-medium text-xl text-[#FF7364] pb-1">
                  Integrations
                </h3>
                <h2 className="chivo font-bold text-[46px] text-second mb-5 ">
                  Easily integrate with your favorite apps
                </h2>
                <p className="max-w-[535px] dm text-lg text-[#645E76] mb-10">
                  App integration, in a general sense, is the process of
                  bringing resources or capabilities from one application to
                  another. As the world of apps continues to evolve, app
                  integration is becoming expected in many contexts.
                </p>
                <button className="bg-[#3639A4] text-primary py-5 px-12 rounded-[6px] dm text-lg font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[697px]">
            <div>
              <img src={brand} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
