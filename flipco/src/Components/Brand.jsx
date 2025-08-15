import React from 'react'

export default function Brand() {
  return (
    <>
    <div id='brands' className='py-10 px-10 bg-gray-100'>
            <h1 className='flex justify-center items-center font-bold mt-5 mb-8 px-10 text-3xl'>
                Our Brands
            </h1>

            <div className='flex justify-center items-center px-8 mb-2'>
                <p className='text-base text-gray-800 text-center max-w-5xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo similique, harum in corporis quis ea, distinctio dolores tempore maxime illum ipsa, tenetur a voluptas velit deserunt nam modi iste.</p>
            </div>

            <div className=' w-60 h-60 flex justify-between items-center'>
                <img className='ml-25 mr-10 rounded-full' src="/images/about.jpg" alt="Brands" />
                <img className='ml-10 mr-10 rounded-full' src="/images/about.jpg" alt="Brands" />
                <img className='ml-10 mr-10 rounded-full' src="/images/about.jpg" alt="Brands" />
                <img className='ml-10 mr-10 rounded-full' src="/images/about.jpg" alt="Brands" />
            </div>
        </div>
    </>
  )
}
