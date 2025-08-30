import React from 'react'

export default function ServicesCard({ title, desc, img }) {
  return (
    <div className='m-2 w-full max-w-xs sm:max-w-sm lg:max-w-md h-80 rounded overflow-hidden shadow-lg border border-gray-300 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-[#00D5BE] cursor-pointer'>
      
      <div className='flex flex-col h-full items-center justify-center px-4 py-6 text-black'>
      
        <div className='w-16 h-16 sm:w-20 sm:h-20 mb-4'>
          {img}
        </div>

        <div className='flex-1 flex flex-col text-center px-2'>
          <h3 className='font-bold text-lg sm:text-xl mb-8'>{title}</h3>
          <p className='text-gray-800 text-sm sm:text-base'>{desc}</p>
        </div>

      </div>
    </div>
  )
}
