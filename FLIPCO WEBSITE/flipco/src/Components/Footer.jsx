import React, { useState } from "react";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setpopupContent] =useState("");
  
  const handleOpenPopup = (content) => {
    setpopupContent(content);
    setShowPopup(true);
  }

  return (
    <>
        <div className='flex-1 flex flex-row justify-evenly pt-8 pb-8 bg-[#3A4D64] text-white'>
          <div className='w-1/4 flex flex-col text-white mb-2 mt-2 ml-20'>
            <img className='w-30 h-20 mb-4' src="/images/logo.jpg" alt="Footer Logo" />
            <p className='text-gray-200 text-base'>FLIPCO LTD specializes in sourcing and supplying quality products to independent retailers, helping them compete with larger chains</p>
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
            <h2 className=' mb-4 text-lg'>Privacy Policy</h2>
            <p className='text-gray-200 text-base'>FLIPCO LTD respects your privacy. We collect only the information needed to respond to inquiries and process orders. Your data is stored securely, never sold, and only shared when legally required. Our site may use cookies to improve user experience.</p>
          </div>

          <div className="w-1/4 flex flex-col text-white mb-2 mt-2 mr-20">
            <h2 className="mb-4 text-lg">Terms of Service</h2>
            <ul className='flex flex-col space-x-10'> 
              <li className='text-base text-gray-200 py-2 px-4 rounded-md'>• Orders & Payments </li> 
              <li className='text-base text-gray-200 py-2 px-4 rounded-md'>• Returns </li> 
              <li className='text-base text-gray-200 py-2 px-4 rounded-md'>• Liability </li> 
              <li className='text-base text-gray-200 py-2 px-4 rounded-md'>• Updates </li> 
            </ul>
            <button
              onClick={() =>
                handleOpenPopup(
                  `By using the FLIPCO LTD website, you agree to the following:


                  1. Orders & Payments – All orders depend on availability and must be paid under agreed terms.
                  
                  2. Returns – Accepted only in line with our returns policy.
                  
                  3. Liability – We are not responsible for indirect loss or damage from use of our site or services.
                  
                  4. Updates – Terms may change, and continued use means you accept the latest version.

                  
                  For questions, contact hello@flipcoltd.co.uk.`
                )
              }
              className="text-left bg-gray-200 w-38 pl-2 text-black hover:bg-gray-500 hover:text-white rounded text-xl hover:cursor-pointer"
            >
              Read More...
            </button>
          </div>

          {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-gray-800 whitespace-pre-line">{popupContent}</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 px-4 py-2 bg-gray-800 text-white hover:bg-gray-500 rounded hover:cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}



        </div>
    </>
  )
}
