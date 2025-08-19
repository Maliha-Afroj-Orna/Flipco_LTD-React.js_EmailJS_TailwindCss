import React from 'react'

export default function Services({title, desc, img}) {
  return (
    <> 
    <div className='ml-4 mr-4 my-20 w-96 h-80 rounded overflow-hidden shadow-lg border border-gray-300 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-4 hover:bg-[#00D5BE] hover:cursor-pointer'>
        <div className="px-2 py-8 rounded text-black">
            <div className="mt-2 w-20 h-20 mx-auto">
                {img}
            </div>

            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-800 text-base">
                {desc}
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
