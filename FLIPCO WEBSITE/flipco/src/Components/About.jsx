import React from 'react'

export default function About() {
  return (
    <>
        <div id="about" className='bg-gray-100 flex flex-col items-center py-10 px-4 md:px-10 overflow-hidden'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-5 mb-12 text-center break-words'>About Us</h1>

            <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-10 mb-4'>
            <img className='w-full md:w-1/2 lg:w-2/5 h-auto rounded object-cover' src="/images/about.jpg" alt="About Us" />

            <div className='flex flex-col max-w-xl'>
                <h1 className='text-2xl font-bold mt-4 md:mt-0'>Who Are We?</h1>
                <p className='text-base mt-2 text-gray-800 break-words'>
                    At FLIPCO LTD, we help independent retailers access big-brand products at competitive prices. Through trusted sourcing, bulk buying, and reliable delivery, we make it easier for small businesses to compete and grow.
                </p>

                <h2 className='text-2xl font-bold mt-2'>Our Mission</h2>
                <p className='text-base text-gray-800 mt-2 break-words'>To level the playing field for independent retailers by providing competitive pricing, quality products, and exceptional service.</p>

                <h2 className='text-2xl font-bold mt-2'>Our Approach</h2>
                <p className='text-base text-gray-800 mt-2 break-words'>
                    Direct partnerships with Manufacturers, Bulk Purchasing Strategies.
                </p>
                
                <a href="#contact" className='mt-8 border-2 border-black font-bold py-2 px-6 rounded-lg text-black text-center hover:bg-black hover:text-white transition'>
                  Contact Us
                </a>

            </div>
            </div>
        </div>
    </>
  )
}
