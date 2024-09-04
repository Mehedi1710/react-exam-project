import React from 'react'
import '../../App.css'
import illustrator from '../../assets/Illustration.png'

const Facts = () => {
  return (
    <div className='max-w-[1410px] mx-auto bg-[#3639A4] rounded-2xl mb-[140px]'>
        <div className='bg-line bg-cover bg-center bg-no-repeat'>
            <div className='flex items-center gap-x-[45px] pl-10 pt-11'>
                <div className='max-w-[646px]'>
                    <img src={illustrator} width={646} alt="" />
                </div>
                <div className='max-w-[608px]'>
                  <h1 className='chivo font-bold text-[44px] text-primary '>Trusted by 35,000+ happy customers.</h1>
                  <div className='mt-[64px] flex items-center justify-between'>
                    <div className='max-w-[176px]'>
                      <h2 className='chivo font-bold text-[44px] text-primary'>720+</h2>
                      <p className='font-medium text-lg dm text-primary '>Over 500 business powered with us</p>
                    </div>
                    <div className='max-w-[176px]'>
                      <h2 className='chivo font-bold text-[44px] text-primary'>4.9</h2>
                      <p className='font-medium text-lg dm text-primary '>Rating on google play and app store</p>
                    </div>
                    <div className='max-w-[176px]'>
                      <h2 className='chivo font-bold text-[44px] text-primary'>200+</h2>
                      <p className='font-medium text-lg dm text-primary '>Easily integrate with your favorite apps</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facts