import React, { useState } from "react";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setpopupContent] = useState("");

  const handleOpenPopup = (content) => {
    setpopupContent(content);
    setShowPopup(true);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap justify-between pt-12 pb-8 px-4 md:px-20 bg-[#3A4D64] text-white">
        
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center text-white mb-6">
          <img className="w-36 h-20 mb-4 object-contain" src="/images/logo.jpg" alt="Footer Logo" />
          <p className="text-gray-200 text-base">
            FLIPCO LTD specializes in sourcing and supplying quality products to independent retailers, helping them compete with larger chains.
          </p>
        </div>

        
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center text-white mb-6">
          <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
          <ul className="flex flex-col space-y-2 md:flex-col md:space-y-2">
            <li><a href="#home" className="text-gray-200 hover:text-white py-1">Home</a></li>
            <li><a href="#about" className="text-gray-200 hover:text-white py-1">About</a></li>
            <li><a href="#services" className="text-gray-200 hover:text-white py-1">Services</a></li>
            <li><a href="#brands" className="text-gray-200 hover:text-white py-1">Brands</a></li>
            <li><a href="#contact" className="text-gray-200 hover:text-white py-1">Contact</a></li>
          </ul>
        </div>

        
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center text-white mb-6">
          <h2 className="mb-4 text-lg font-semibold">Privacy Policy</h2>
          <p className="text-gray-200 text-base">
            FLIPCO LTD respects your privacy. We collect only the information needed to respond to inquiries and process orders. Your data is stored securely, never sold, and only shared when legally required. Our site may use cookies to improve user experience.
          </p>
        </div>

        
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center text-white mb-6">
          <h2 className="mb-4 text-lg font-semibold">Terms of Service</h2>
          <ul className="flex flex-col space-y-2">
            <li className="text-gray-200">• Orders & Payments</li>
            <li className="text-gray-200">• Returns</li>
            <li className="text-gray-200">• Liability</li>
            <li className="text-gray-200">• Updates</li>
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
            className="mt-2 text-left bg-gray-200 sm:w-auto pl-2 text-black w-32 px-2 mr-8 hover:bg-gray-500 hover:text-white rounded text-base sm:text-lg transition"
          >
            Read More...
          </button>
        </div>

       
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-gray-800 whitespace-pre-line">{popupContent}</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 px-4 py-2 bg-gray-800 text-white hover:bg-gray-500 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
