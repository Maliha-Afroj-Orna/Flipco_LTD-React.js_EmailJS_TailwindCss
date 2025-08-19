import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesCard from './ServicesCard';


export default function Services() {
const services = [
  {
    id: 1, 
    title: 'Product Sourcing', 
    desc: 'Access a wide range of trusted, high-demand products across personal care, beauty, healthcare, and household categories.',
    img: <img src='/images/product.png' alt='Cost Efficient' />
  },
  {
    id: 2, 
    title: 'Bulk Purchasing Support', 
    desc: 'Benefit from competitive pricing through our bulk buying strategies, giving independents the same advantage as larger chains.',
    img: <img src='/images/purchase.png' alt='Reliable Sourcing' />
  },
  {
    id: 3, 
    title: 'Logistics & Delivery', 
    desc: 'Count on us for reliable and timely delivery, ensuring your shelves are always stocked.',
    img: <img src='/images/delivery.png' alt='Diverse Brands' />
  },
  {
    id: 4, 
    title: 'Tailored Solutions', 
    desc: 'Every retailer is unique; we offer flexible sourcing options and custom orders to match your business needs.',
    img: <img src='/images/solution.png' alt='Tailored Support' />
  },

];


 const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    pauseOnHover: true,
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
        <h1 id='services' className='flex justify-center items-center font-bold mt-15 mb-8 px-10 text-3xl'>
            Our Services
        </h1>

        <div className='ml-20 pb-8'>
          <div className='flex justify-center items-center px-8 mb-2'>
              <p className='text-base text-gray-800 text-center max-w-5xl'>At FLIPCO LTD, we provide end-to-end sourcing and supply solutions designed to empower independent retailers. Our services are built around reliability, cost efficiency, and flexibility.</p>
          </div>

        <Slider {...settings}>
            {services.map(({ id, title, desc, img }) => (
            <div key={id} className='px-2'>
                <ServicesCard title={title} desc={desc} img={img} />
            </div>
            ))}
      </Slider>

      </div>
    </>
  )
}
