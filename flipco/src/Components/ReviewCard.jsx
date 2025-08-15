import React from 'react'

export default function ReviewCard({name, review, img}) {
  return (
    <> 
    <div className='ml-4 mr-4 my-20 max-w-sm rounded overflow-hidden shadow-lg border border-gray-300 transition-transform duration-300 hover:shadow-2xl hover:cursor-pointer'>
        <div className="px-2 py-8 bg-[#BDE5DE] text-black">
            <div className="mt-2 w-20 h-20 mx-auto">
                {img}
            </div>

            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-800 text-base">
                {review}
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
