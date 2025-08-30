import React from 'react'
import WhyChooseCard from './WhyChooseCard'

export default function WhyChooseUs() {
  const cards = [
  {
    id: 1, 
    title: 'Cost Efficient', 
    desc: 'Flipco LTD maintains cost efficiency by optimizing resources, reducing waste, and streamlining operations, ensuring maximum value with minimal expenses.',
    img: <img src='/images/dollar.png' alt='Cost Efficient' />
  },
  {
    id: 2, 
    title: 'Reliable Sourcing', 
    desc: 'Flipco LTD ensures reliable sourcing by partnering with trusted suppliers, maintaining consistent quality, and delivering products on time, every time.',
    img: <img src='/images/like.png' alt='Reliable Sourcing' />
  },
  {
    id: 3, 
    title: 'Diverse Brands', 
    desc: 'Flipco LTD offers a diverse range of brands, catering to varied customer needs and preferences while maintaining consistent quality.',
    img: <img src='/images/brand.png' alt='Diverse Brands' />
  },
  {
    id: 4, 
    title: 'Tailored Support', 
    desc: 'Flipco LTD provides tailored support by understanding each client’s unique needs, offering personalized solutions, and ensuring exceptional service at every step.',
    img: <img src='/images/support.png' alt='Tailored Support' />
  },
  {
  id: 5,
  title: 'Innovative Solutions',
  desc: 'Flipco LTD delivers innovative solutions tailored to each client’s needs, combining creativity and technology to drive growth and efficiency.',
  img: <img src='/images/innovative.png' alt='Innovative Solutions' />
}


];

  return (
    <>
        <div className='py-10 px-4 md:px-10 overflow-hidden'>
            <div className='flex justify-center items-center mb-8'>
                <h1 className='text-black text-2xl sm:text-3xl md:text-4xl font-bold text-center break-words'>Why Choose Us?</h1>
            </div>

            <div className='flex flex-wrap justify-center gap-6 mb-4'>
              {cards.map(({id, title, desc, img}) => 
                <div key={id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2">
                  <WhyChooseCard title={title} desc={desc} img={img} />
                </div>
              )} 
            </div>
        </div>
    </>
  )
}
