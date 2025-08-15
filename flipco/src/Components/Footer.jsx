import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='flex-1 flex flex-row justify-evenly pt-8 pb-8 bg-[#3A4D64] text-white'>
          <div className='w-1/4 flex flex-col text-white mb-2 mt-2 ml-20'>
            <img className='w-30 h-20 mb-4' src="/images/logo.jpg" alt="Footer Logo" />
            <p className='text-gray-200 text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nemo nesciunt non? Corporis dignissimos doloribus fugit? Porro ab dolor quo, voluptatem rem perferendis nisi voluptate temporibus dolorem adipisci voluptates odit.</p>
          </div>

          <div className='w-1/4 flex flex-col items-center text-white mb-2 mt-2 ml-5'>
            <h2 className=' mb-4 text-lg'>Quick Links</h2>
            <ul className='flex flex-col space-x-10'>
                  <li><a href="#home" className='text-lg text-gray-200 cursor-pointer py-2 px-4 rounded-md hover:text-white hover:cursor-pointer'>Home</a></li>
                  <li><a href="#about" className='text-lg text-gray-200 cursor-pointer py-2 px-4 rounded-md hover:text-white hover:cursor-pointer'>About</a></li>
                  <li><a href="#services" className='text-lg text-gray-200 cursor-pointer py-2 px-4 rounded-md hover:text-white hover:cursor-pointer'>Services</a></li>
                  <li><a href="#brands" className='text-lg text-gray-200 cursor-pointer py-2 px-4 rounded-md hover:text-white hover:cursor-pointer'>Brands</a></li>
                  <li><a href="#contact" className='text-lg text-gray-200 cursor-pointer py-2 px-4 rounded-md hover:text-white hover:cursor-pointer'>Contact</a></li>
              </ul>
          </div>

          <div className='w-1/4 flex flex-col text-white mb-2 mt-2 ml-5 mr-7'>
            <h2 className=' mb-4 text-lg'>Terms of Service</h2>
            <p className='text-gray-200 text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nemo nesciunt non? Corporis dignissimos doloribus fugit?</p>
          </div>

          <div className='w-1/4 flex flex-col text-white mb-2 mt-2 mr-20'>
            <h2 className=' mb-4 text-lg'>Privacy Policy</h2>
            <ul className='flex flex-col space-x-10'>
                  <li><a href="" className='text-base text-gray-200 cursor-pointer py-2 px-4 rounded-md'>•	How you collect, use, and store customer data.</a></li>
                  <li><a href="" className='text-base text-gray-200 cursor-pointer py-2 px-4 rounded-md'>•	Cookies and analytics policy.</a></li>
                  <li><a href="" className='text-base text-gray-200 cursor-pointer py-2 px-4 rounded-md'>•	Contact information for privacy concerns.</a></li>
              </ul>
          </div>

        </div>
    </>
  )
}
