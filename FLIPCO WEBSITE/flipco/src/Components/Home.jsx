import React from 'react'
import Hero from './Hero'
import Header from './Header'

export default function Home() {
  return (
    <>
        <Hero />

        <Header />
        
        <div id='home' className='relative w-full h-[80vh] sm:h-[70vh] md:h-[80vh] overflow-hidden'> 
            <img className='absolute w-full h-full object-cover' src="/images/background.jpg" alt="Home Page" />
            

            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/40 px-4'>
              <h4 className='text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center break-words'>Welcome to FLIPCO LTD!</h4>
                <p className='max-w-xl text-center text-white text-sm sm:text-lg md:text-2xl mb-6 break-words'><span className='font-bold text-xl sm:text-2xl md:text-3xl'>FLIPCO LTD </span>specializes in sourcing and supplying quality products to independent retailers, helping them compete with larger chains</p>
                
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap'>
                  <a href="#services" className='border-2 border-white font-bold py-2 px-6 rounded-lg text-white text-sm sm:text-md md:text-lg text-center hover:bg-white hover:text-black transition break-words'>
                      Get Started
                  </a>
                  <a href="#about" className='border-2 border-white font-bold py-2 px-6 rounded-lg text-white text-sm sm:text-md md:text-lg text-center hover:bg-white hover:text-black transition break-words'>
                      Learn More
                  </a>
                </div>

            </div>
        </div>
    </>
  )
}
