import React from 'react'
import WhyChooseCard from './WhyChooseCard'

export default function WhyChooseUs() {
  const cards = [
  {
    id: 1, 
    title: 'Cost Efficient', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    img: <img src='/images/dollar.png' alt='Cost Efficient' />
  },
  {
    id: 2, 
    title: 'Reliable Sourcing', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    img: <img src='/images/like.png' alt='Reliable Sourcing' />
  },
  {
    id: 3, 
    title: 'Diverse Brands', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    img: <img src='/images/brand.png' alt='Diverse Brands' />
  },
  {
    id: 4, 
    title: 'Tailored Support', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
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
