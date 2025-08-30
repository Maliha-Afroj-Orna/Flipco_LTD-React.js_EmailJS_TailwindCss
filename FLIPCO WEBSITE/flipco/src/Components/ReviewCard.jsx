import React from 'react'

export default function ReviewCard({name, review, subname}) {
  return (
    <> 
    <div className='my-10 w-full max-w-sm h-auto rounded overflow-hidden shadow-lg border border-gray-300 transition-transform duration-300 hover:shadow-2xl hover:cursor-pointer'>
        <div className="py-8 bg-[#BDE5DE] text-black">
            <div className="px-6 py-4 text-center">
                <p className="text-gray-900 text-base mb-8">
                {review}
                </p>

                <div className="font-bold text-xl mb-2">{name}</div>
                <div className='italic text-gray-500'>{subname}</div>
            </div>
        </div>
    </div>
    </>
  )
}
