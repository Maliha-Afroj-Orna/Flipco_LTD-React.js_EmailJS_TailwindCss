import React from 'react'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white border border-b border-gray-300'>
        <div className='flex justify-between items-center'>
            <div className='ml-12'>
                <a href="#home"><img className='w-35 h-20' src="/images/logo.jpg" alt="Flipco Logo" /></a>
            </div>

            <nav className='mr-12'>
                <ul className='flex space-x-10'>
                    <li><a href="#home" className='font-bold text-lg cursor-pointer hover:bg-[#3a4d64] py-2 px-4 rounded-md hover:text-white'>Home</a></li>
                    <li><a href="#about" className='font-bold text-lg cursor-pointer hover:bg-[#3a4d64] py-2 px-4 rounded-md hover:text-white'>About</a></li>
                    <li><a href="#services" className='font-bold text-lg cursor-pointer hover:bg-[#3a4d64] py-2 px-4 rounded-md hover:text-white'>Services</a></li>
                    <li><a href="#brands" className='font-bold text-lg cursor-pointer hover:bg-[#3a4d64] py-2 px-4 rounded-md hover:text-white'>Brands</a></li>
                    <li><a href="#contact" className='font-bold text-lg cursor-pointer hover:bg-[#3a4d64] py-2 px-4 rounded-md hover:text-white'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
