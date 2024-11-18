import React from 'react'
import { FaTruckMoving } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuLock } from "react-icons/lu";
const Features = () => {
  return (
    <div className=' flex justify-center my-3 py-4 items-center bg-[#E0D5D3]'>
        <div className='flex pr-3 md:pr-8 md: flex-col lg:flex-row items-center justify-center border-r border-r-black '>
            <div><FaTruckMoving/></div>
            <div>Free Delivery</div>
        </div>
        <div className='flex pr-3 md:pr-8 md: flex-col lg:flex-row items-center justify-center border-r border-r-black '>
            <div><IoChatbubblesOutline/></div>
            <div>Customer Support</div>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center'>
            <div><LuLock/></div>
            <div>Secure Payment</div>
        </div>
    </div>
  )
}

export default Features