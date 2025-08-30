import React from 'react'

export default function Brand() {
  return (
    <>
    <div id='brands' className='py-10 px-4 sm:px-8 bg-gray-100'>
            <h1 className='flex justify-center items-center font-bold mt-5 mb-6 text-2xl sm:text-3xl'>
                Our Brands
            </h1>

            <div className='flex justify-center items-center mb-8'>
                <p className='text-sm sm:text-base text-gray-800 text-center max-w-4xl mb-4'>We supply a wide range of trusted household names – from personal care to healthcare essentials – ensuring your customers get the products they know and love.</p>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-4'>
                <img className='w-16 sm:w-20 h-auto rounded-md' src="/images/E45.png" alt="E45" />
                <img className='w-16 sm:w-20 h-auto rounded-md' src="/images/oral-b.png" alt="Oral B" />
                <img className='w-16 sm:w-20 h-auto rounded-md' src="/images/colgate.png" alt="Colgate" />
                <img className='w-16 sm:w-20 h-auto rounded-md' src="/images/radox.png" alt="Radox" />
                <img className='w-16 sm:w-20 h-auto rounded-md' src="/images/Gillette.png" alt="Gillette" />
                <img className='w-16 sm:w-20 h-auto rounded-md' src="/images/tommy.png" alt="Tommy Hilfiger" />
                <img className='w-16 sm:w-20 h-auto rounded-md' src="/images/unilever.png" alt="Unilever" />
                <img className='w-16 sm:w-20 h-auto rounded-md' src="/images/lego.png" alt="Lego" />
                <img className='w-16 sm:w-20 h-auto rounded-md' src="/images/p&g.png" alt="P&G" />
            </div>
        </div>
    </>
  )
}
