import React from 'react'
import intro from "../../assets/intro.png"
const Intro = () => {
  return (
    <div className="overflow-hidden">
          <div className='bg-[#F7F2F5] px-4 py-20 md:px-1 lg:px-10 lg:py-24 lg:flex lg:justify-between justify-center h-[600px] items-center w-[100vw] overflow-hidden'>
        <div className='px-12 bg-[#F7F2F5] items-center lg:flex lg:justify-between'>
            <div className='flex flex-col items-start gap-2 md:float-right lg:ml-[200px] pt-12'>
                <p className='mb-2 text-2xl font-bold'>INTRODUCTION</p>
                <p className='font-semibold text-xl w-full'>Ethical and Beautiful Collection</p>
                <button className='bg-gray-500 text-white px-3 py-2 rounded'>SHOP NOW</button>
            </div>
            <div className='float-left lg:ml-[400px]'>
                <img src={intro} alt="" className="w-[320px] lg:w-[500px]" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Intro