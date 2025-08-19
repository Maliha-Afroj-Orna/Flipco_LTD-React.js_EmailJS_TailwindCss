import React from 'react'

export default function Home() {
  return (
    <>
        <div id='home' className='relative w-full h-[80vh]'> 
            <img className='absolute w-full h-full object-cover' src="/images/background.jpg" alt="Home Page" />
            

            <div className='absolute top-0 right-0 w-full h-[80vh] flex flex-col justify-center items-center'>
              <h4 className='text-white text-2xl'>Welcome to FLIPCO LTD!</h4>
                <p className='max-w-xl mb-2 text-center text-2xl text-white px-4 py-4'><span className='font-bold text-3xl'>FLIPCO LTD </span>specializes in sourcing and supplying quality products to independent retailers, helping them compete with larger chains</p>
                <div className='flex flex-row justify-between items-center'>
                  <button className='border-2 border-white font-bold py-1 px-2 mr-4 rounded-lg flex flex-row justify-center items-center text-md text-white hover:bg-white hover:text-black hover:cursor-pointer'><a href="#services">Get Started</a></button>
                  <button className='border-2 border-white font-bold py-1 px-2 mr-4 rounded-lg flex flex-row justify-center items-center text-md text-white hover:bg-white hover:text-black hover:cursor-pointer'><a href="#about">Learn More</a></button>
                </div>
            </div>
        </div>
    </>
  )
}
