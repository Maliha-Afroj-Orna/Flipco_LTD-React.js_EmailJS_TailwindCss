import React from 'react'

export default function Hero() {
  return (
    <>
        <div className='flex flex-col md:flex-row items-center md:justify-between bg-[#3a4d64] text-white px-4 md:px-12 lg:px-20 py-2 overflow-hidden'>
            <div className='text-center md:text-left mb-2 md:mb-0 font-medium break-words'>
                Empowering Independent Retailers with Big-Buying Power
            </div>

            <div className="text-sm md:text-base lg:text-lg flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
              <a className="hover:cursor-pointer hover:text-gray-200" href="#brands">Explore Our Brands</a> <span className="hidden sm:inline">|</span> <a className="hover:cursor-pointer hover:text-gray-200" href="#contact">Get a Quote?</a>
            </div>
        </div>
    </>
  )
}
