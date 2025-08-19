import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from './ReviewCard';

export default function Review() {

const review = [
  {
    id: 1, 
    name: 'Maria', 
    subname: '- Grocery & Household Retailer, Wolverhampton.',
    review: '“Great service and great team! FLIPCO has helped us grow our business with trusted products that our customers love.”',
  },
  {
    id: 2, 
    name: 'Amir', 
    subname: '- Independent Convenience Store Owner, Birmingham.',
    review: '“FLIPCO LTD has been a game-changer for our store. Their competitive prices and reliable deliveries help us keep our shelves full and our margins healthy.”',
    img: <img src='/images/product.png' alt='Nancy' />
  },
  {
    id: 3, 
    name: 'Sophie', 
    subname: '- Pharmacy Retailer, Coventry.',
    review: '“We used to struggle competing with larger chains, but thanks to FLIPCO’s bulk purchasing support, we now offer the same brands at better prices.”',
    img: <img src='/images/product.png' alt='Nancy' />
  },
  {
    id: 4, 
    name: 'James', 
    subname: '- Local Health & Beauty Shop, Birmingham.',
    review: '“The tailored sourcing service is fantastic. FLIPCO always finds exactly what we need, and the delivery is always on time.”',
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
              <p className='text-base text-gray-800 text-center max-w-5xl'>Independent retailers trust FLIPCO LTD to deliver value, quality, and reliability. See how we’ve helped businesses grow and stay competitive.</p>
          </div>

        <div className='flex flex-row justify-between items-center flex-1 w-full'>
            <div className='flex-1 min-w-0 ml-40'>
            <Slider {...settings}>
                {review.map(({ id, name, review, subname }) => (
                <div key={id} className='px-2'>
                    <ReviewCard name={name} review={review} subname={subname} />
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
