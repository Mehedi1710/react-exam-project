import React from 'react'
import '../../App.css'
import group1 from '../../assets/group1.png'
import group2 from '../../assets/group2.png'
import group3 from '../../assets/group3.png'
import group4 from '../../assets/group4.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Service = () => {
  return (
    <div className='max-w-[1410px] mx-auto py-[140px]'>
        <div>
            <div className='text-center'>
                <h3 className='text-[#FF7364] dm font-medium text-xl mb-1'>Our Services</h3>
                <h2 className='text-second font-bold text-[46px] chivo '>How It Works</h2>
            </div>
            <div className='my-[80px] flex items-center justify-between'>
                <div className='group w-[330px] rounded-[8px] p-9 hover:bg-[#3639A4] border-2'>
                    <img src={group1} alt="" />
                    <h2 className='pt-[26px] text-second group-hover:text-primary pb-2 chivo font-bold text-[22px]'>Assign Any Work</h2>
                    <p className='dm text-base text-[#645E76] mb-[26px] group-hover:text-primary'>Work assignment or job assignment is allocating work to work centers or appropriate </p>
                    <a href="" className='flex items-center dm text-base text-[3639A4] group-hover:text-primary font-medium gap-x-1'>Read More <FaArrowRightLong /></a>
                </div>
                <div className='group w-[330px] rounded-[8px] p-9 hover:bg-[#3639A4] border-2'>
                    <img src={group2} alt="" />
                    <h2 className='pt-[26px] text-second group-hover:text-primary pb-2 chivo font-bold text-[22px]'>Assign Any Work</h2>
                    <p className='dm text-base text-[#645E76] mb-[26px] group-hover:text-primary'>Work assignment or job assignment is allocating work to work centers or appropriate </p>
                    <a href="" className='flex items-center dm text-base text-[3639A4] group-hover:text-primary font-medium gap-x-1'>Read More <FaArrowRightLong /></a>
                </div>
                <div className='group w-[330px] rounded-[8px] p-9 hover:bg-[#3639A4] border-2'>
                    <img src={group3} alt="" />
                    <h2 className='pt-[26px] text-second group-hover:text-primary pb-2 chivo font-bold text-[22px]'>Assign Any Work</h2>
                    <p className='dm text-base text-[#645E76] mb-[26px] group-hover:text-primary'>Work assignment or job assignment is allocating work to work centers or appropriate </p>
                    <a href="" className='flex items-center dm text-base text-[3639A4] group-hover:text-primary font-medium gap-x-1'>Read More <FaArrowRightLong /></a>
                </div>
                <div className='group w-[330px] rounded-[8px] p-9 hover:bg-[#3639A4] border-2'>
                    <img src={group4} alt="" />
                    <h2 className='pt-[26px] text-second group-hover:text-primary pb-2 chivo font-bold text-[22px]'>Assign Any Work</h2>
                    <p className='dm text-base text-[#645E76] mb-[26px] group-hover:text-primary'>Work assignment or job assignment is allocating work to work centers or appropriate </p>
                    <a href="" className='flex items-center dm text-base text-[3639A4] group-hover:text-primary font-medium gap-x-1'>Read More <FaArrowRightLong /></a>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='text-[#3639A4] py-5 px-12 dm text-lg font-medium border rounded-[6px] border-[#3639A4]'>View More</button>
            </div>
        </div>
    </div>
  )
}

export default Service