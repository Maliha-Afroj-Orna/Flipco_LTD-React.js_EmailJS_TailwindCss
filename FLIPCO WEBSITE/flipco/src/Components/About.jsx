import React from 'react'

export default function About() {
  return (
    <>
        <div id="about" className='bg-gray-100 flex flex-col justify-center items-center py-10 px-10'>
            <h1 className='text-3xl font-bold mt-5 mb-8'>About Us</h1>

            <div className='flex flex-row justify-between items-center'>
            <img className='mr-10 ml-20 mt-8 mb-10 w-170 h-120 rounded' src="/images/about.jpg" alt="About Us" />

            <div className='ml-10 mr-20 mt-4 mb-10'>
                <h1 className='text-2xl font-bold'>Who Are We?</h1>
                <p className='text-base mt-4 text-gray-800'>
                    At FLIPCO LTD, we help independent retailers access big-brand products at competitive prices. Through trusted sourcing, bulk buying, and reliable delivery, we make it easier for small businesses to compete and grow.
                </p>
                <h1 className='text-2xl font-bold mt-8'>Our Mission</h1>
                <h3 className='text-base text-gray-800 mt-5'>To level the playing field for independent retailers by providing competitive pricing, quality products, and exceptional service</h3>

                <h1 className='text-2xl font-bold mt-8'>Our Approach</h1>
                <h3 className='text-base text-gray-800 mt-5'>Direct partnerships with Manufacturers, Bulk Purchasing Strategies</h3>
                
                <button className='mt-10 border-2 border-black font-bold py-1 px-2 mr-4 rounded-lg flex flex-row justify-center items-center text-md text-black hover:bg-black hover:text-white hover:cursor-pointer'><a href="#contact">Contact Us</a></button>

            </div>
            </div>
        </div>
    </>
  )
}
