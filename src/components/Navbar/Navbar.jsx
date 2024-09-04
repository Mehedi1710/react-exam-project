import React from 'react'
import logo from '../../assets/Logo.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import '../../App.css';


const Navbar = () => {
  return (
    <div className='max-w-[1410px] mx-auto pt-8'>
        <div className='flex items-center justify-between'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className='text-white flex items-center gap-x-[50px] font-medium text-lg'>
                    <li><a className='flex items-center gap-x-1 dm'>Home<MdKeyboardArrowDown /></a></li>
                    <li><a className='dm'>Features</a></li>
                    <li><a className='flex items-center gap-x-1 dm'>Service<MdKeyboardArrowDown /></a></li>
                    <li><a className='flex items-center gap-x-1 dm'>Pages<MdKeyboardArrowDown /></a></li>
                    <li><a className='dm'>Blog</a></li>
                </ul>
            </div>
            <div className='flex items-center gap-x-9'>
                <a className='text-primary font-medium text-lg'>Login</a>
                <button className='bg-[#43E7DF] py-4 px-10 rounded-lg dm font-medium text-lg text-[#2C2643] '>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar