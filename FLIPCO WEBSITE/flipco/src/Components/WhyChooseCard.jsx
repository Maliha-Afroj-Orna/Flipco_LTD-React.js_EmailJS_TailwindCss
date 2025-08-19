import React from 'react'

export default function WhyChooseCard({title, desc, img}) {
  return (
    <> 
    <div className='ml-4 mr-4 my-20 w-98 h-85 rounded overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-4 cursor-pointer'>
        <div className="px-2 py-8 bg-[#3a4d64] text-white">
            <div className="mt-2 w-20 h-20 mx-auto filter invert brightness-0">
                {img}
            </div>

            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-200 text-base">
                {desc}
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
