import React from 'react'

export default function Hero() {
  return (
    <>
        <div className='flex flex-row justify-center bg-[#3a4d64] text-white px-0 py-2'>
            <div className='ml-12 mr-20'>
                Empowering Independent Retailers with Big-Buying Power
            </div>

            <div><a className='hover:cursor-pointer hover:text-gray-200' href="#brands">Explore Our Brands</a> | <a className='hover:cursor-pointer hover:text-gray-200' href="#contact">Get a Quote?</a></div>
        </div>
    </>
  )
}
