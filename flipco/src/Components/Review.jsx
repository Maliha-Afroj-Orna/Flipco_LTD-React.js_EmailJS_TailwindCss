import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from './ReviewCard';

export default function Review() {

const review = [
  {
    id: 1, 
    name: 'Nancy', 
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto suscipit, repudiandae commodi magnam cum eligendi maxime, dolorem voluptates praesentium minima tempora cumque at quibusdam, eaque deserunt obcaecati assumenda! Distinctio, debitis.',
    img: <img src='/images/product.png' alt='Nancy' />
  },
  {
    id: 2, 
    name: 'Nancy', 
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto suscipit, repudiandae commodi magnam cum eligendi maxime, dolorem voluptates praesentium minima tempora cumque at quibusdam, eaque deserunt obcaecati assumenda! Distinctio, debitis.',
    img: <img src='/images/product.png' alt='Nancy' />
  },
  {
    id: 3, 
    name: 'Nancy', 
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto suscipit, repudiandae commodi magnam cum eligendi maxime, dolorem voluptates praesentium minima tempora cumque at quibusdam, eaque deserunt obcaecati assumenda! Distinctio, debitis.',
    img: <img src='/images/product.png' alt='Nancy' />
  },
  

];


 const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, 
    pauseOnHover: false,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <> 
    <div className='bg-[#9DDCD1] py-10 px-10'>
        <h1 id='services' className='flex justify-center items-center font-bold mt-5 mb-8 px-10 text-3xl'>
            Customer Review
        </h1>

        <div className='ml-20 pb-8'>
          <div className='flex justify-center items-center px-8 mb-2'>
              <p className='text-base text-gray-800 text-center max-w-5xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo similique, harum in corporis quis ea, distinctio dolores tempore maxime illum ipsa, tenetur a voluptas velit deserunt nam modi iste.</p>
          </div>

        <div className='flex flex-row justify-between items-center flex-1 w-full'>
            <div className='flex-1 min-w-0 ml-40'>
            <Slider {...settings}>
                {review.map(({ id, name, review, img }) => (
                <div key={id} className='px-2'>
                    <ReviewCard name={name} review={review} img={img} />
                </div>
                ))}
            </Slider>
            </div>

            <div className="flex-shrink-0 relative flex items-center justify-center mr-70">
    
    <div className="absolute w-120 h-120 bg-teal-400 [clip-path:circle(70%_at_90%_50%)]"></div>

    
    <img
      className="relative w-100 h-100 object-cover rounded-full shadow-lg"
      src="/images/about.jpg"
      alt="Review"
    />
    </div>
        </div>

      </div>
      </div>
    </>
  )
}
