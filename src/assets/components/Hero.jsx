import React from 'react'
import Image1 from '../../assets/Slider/img1.png'
import Image2 from '../../assets/Slider/img2.png'
import Image3 from '../../assets/Slider/img3.png'
import Slider from 'react-slick'

const ImageList = [
      {
        id: 1,
        img: Image1,
        title: "Upto 30% OFF on Home Appliances ",
        description: 
        "",
      },
      {
        id: 2,
        img: Image2,
        title: "Upto 50% OFF on Electronic items",
        description: 
        "",
      },
      {
        id: 3,
        img: Image3,
        title: "Upto 20% OFF on MakeUp Products",
        description: 
        "",
      },
]


function Hero() {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  }


  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[350px] bg-gray-100 flex justify-center items-center'>
        <div className='h-[400px] w-[400px] bg-lime-300 absolute -z-0 -top-1/2 right-0
         rounded-3xl rotate-45'></div>
         <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
              {ImageList.map((data)=>(
                 <div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-4 pt-12 text-center order-2 relative z-10'>
                        <h1 className='text-5xl sm:text-6xl lg:text-5xl font-bold'>{data.title}</h1>
                        <p className='text-sm'>{data.description}</p>
                     <div>
                        <button className='bg-lime-600 p-2 rounded-2xl hover:opacity-80 cursor-pointer'>Order Now</button>
                     </div>
                    </div>
                    {/* Image Section */}
                    <div className='order-1 sm:order-2'>
                        <div className='relative z-10'>
                        <img src={data.img} alt="" className='relative -z-0' />
                        </div>
                    </div>
                </div>
            </div>
              ))}
            </Slider>
         </div>
    </div>
  )
}

export default Hero