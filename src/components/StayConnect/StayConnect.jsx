import React from 'react'

const StayConnect = () => {
  return (
    <div className='flex items-center flex-col my-3'>
        <h1 className='text-xl my-3'>Stay up to date</h1>
    <div className='flex justify-center'>
    <div className='border flex border-black '>
            <input type="text" placeholder="Enter your mail" className='py-2 md:py-3 placeholder-gray-700 w-[180px] md:w-[30rem]' />
            <button className='py-2 md:py-3 px-3 bg-black text-white'>SUBSCRIBE</button>
        </div>
    </div>
    </div>
  )
}

export default StayConnect