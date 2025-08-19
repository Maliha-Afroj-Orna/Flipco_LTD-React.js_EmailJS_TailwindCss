import React from 'react'

export default function Brand() {
  return (
    <>
    <div id='brands' className='py-10 px-10 bg-gray-100'>
            <h1 className='flex justify-center items-center font-bold mt-5 mb-8 px-10 text-3xl'>
                Our Brands
            </h1>

            <div className='flex justify-center items-center px-8 mb-8'>
                <p className='text-base text-gray-800 text-center max-w-5xl'>We supply a wide range of trusted household names – from personal care to healthcare essentials – ensuring your customers get the products they know and love.</p>
            </div>

            <div className='w-27 h-27 flex justify-between items-center mb-8'>
                <img className='ml-25 mr-5 rounded-md' src="/images/E45.png" alt="E45" />
                <img className='ml-5 mr-5 rounded-md' src="/images/oral-b.png" alt="Oral B" />
                <img className='ml-5 mr-5 rounded-md' src="/images/colgate.png" alt="Colgate" />
                <img className='ml-5 mr-5 rounded-md' src="/images/radox.png" alt="Radox" />
                <img className='ml-5 mr-5 rounded-md' src="/images/Gillette.png" alt="Gillette" />
                <img className='ml-5 mr-5 rounded-md' src="/images/tommy.png" alt="Tommy Hilfiger" />
                <img className='w-20 h-20 ml-5 mr-5 rounded-md' src="/images/unilever.png" alt="Unilever" />
                <img className='ml-5 mr-5 rounded-md' src="/images/lego.png" alt="Lego" />
                <img className='ml-5 mr-20 rounded-md' src="/images/p&g.png" alt="P&G" />
            </div>
        </div>
    </>
  )
}
