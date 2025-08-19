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

];

  return (
    <>
        <div className='py-10 px-10'>
            <div className='flex justify-center items-center'>
                <h1 className='text-black text-3xl font-bold mt-5'>Why Choose Us?</h1>
            </div>

            <div className='flex justify-between items-center'>
              {cards.map(({id, title, desc, img}) => 
                <WhyChooseCard key={id} title={title} desc={desc} img={img} />
              )} 
            </div>
        </div>
    </>
  )
}
