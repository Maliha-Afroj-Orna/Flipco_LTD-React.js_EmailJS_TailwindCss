import React from 'react'

export default function WhyChooseCard({title, desc, img}) {
  return (
    <> 
    <div className='m-2 w-full sm:w-5/12 md:w-1/2 lg:w-full h-full rounded overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer'>
        <div className="flex flex-col h-full px-4 py-6 bg-[#3a4d64] text-white items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 filter brightness-0 invert flex-shrink-0">
                {img}
            </div>

            <div className="text-center px-2 flex-1 flex flex-col justify-between">
                <div className="font-bold text-lg sm:text-xl mb-1">{title}</div>
                <p className="text-gray-200 text-sm sm:text-base break-words">
                {desc}
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
