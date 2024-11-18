import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaPlus } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    
    {/* // For medium and large devices */}
    <div className='hidden md:flex py-2 px-[40px] items-center justify-evenly bg-[#F8F8F8]'>
        <div className='w-[300px]'>
            <p className='text-lg mb-3'>ONAYA FASHIONS PVT. LTD.</p>
            <p>At Onaya, our talented weavers create hundreds of unique ensemle every day.</p>
            <p>Our meticulous detailing and eye for flawless perfection, paired with our sincerity and dedication to procure the highest-quality fabrics,</p>
            <div className='flex gap-3'>
                <FaFacebook className='text-blue-600 text-xl mt-2'/>
                <FaInstagram className='text-blue-600 text-xl mt-2'/>
            </div>
        </div>
        <div>
            <p className='mb-3'>INFORMATION</p>
            <p>About Us</p>
            <p>Onaya Foundation</p>
            <p>Testimonials</p>
            <p>Garment Contruction</p>
            <p>Alteration</p>
            <p>Blog</p>
        </div>
        <div>
            <p className='mb-3'>SHOP</p>
            <p>Sarees</p>
            <p>Suits</p>
            <p>Lehenga</p>
            <p>Drape</p>
            <p>Indo Western</p>
            <p>Under 12K</p>
        </div>
        <div>
            <p className='mb-3'>Customer Searvice</p>
            <p>Contact</p>
            <p>FAQs</p>
            <p>Shipping Policy</p>
            <p>Refund Policy</p>
            <p>Cancellation</p>
            <p>Track order</p>
        </div>
    </div>
    {/* // For Small Devices */}
    <div className='md:hidden'>
        <div className='px-2'>
            <div className='flex items-center justify-between py-2 border-b border-gray-200'>
                <p>INFORMATION</p>
                <FaPlus/>
            </div>
        </div>
        <div className='px-2'>
            <div className='flex items-center justify-between py-2 border-b border-gray-200'>
                <p>INFORMATION</p>
                <FaPlus/>
            </div>
        </div>
        <div className='px-2'>
            <div className='flex items-center justify-between py-2 border-b border-gray-200'>
                <p>INFORMATION</p>
                <FaPlus/>
            </div>
        </div>
    </div>
    </>

  )
}

export default Footer