import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import restaurantChains from '../assets/Data/restaurantChains'
import { MdStarRate } from "react-icons/md";


const TopRestaurant = () => {
  const [slide, setSlide] = useState(0)

  const nextslide = () => {
    console.log(restaurantChains.length)
    console.log(restaurantChains.length)
    if (restaurantChains.length - 3 == slide) return false
    setSlide(slide + 1)
  }
  const prevslide = () => {
    if (slide == 0) return false
    setSlide(slide - 1)
  }
  return (
    <div className=' max-w-screen-lg mx-auto py-5 flex flex-col  '>
      <div className="sliderTop flex justify-between px-1 py-2 items-center  ">
        <h1 className='text-2xl font-extrabold font-[Poppins]'>Top restaurant chains in Mumbai</h1>
        <div className="arrows flex  gap-3 duration-300">
          <div className="left rounded-full bg-[#e9eaeb] w-[30px] h-[30px] flex items-center justify-center px-1 py-1 hover:bg-[#d7d8d9]" ><FaArrowLeft onClick={nextslide} className='cursor-pointer' /></div>
          <div className="  rounded-full bg-[#e9eaeb] w-[30px] h-[30px] flex items-center justify-center px-1 py-1 hover:bg-[#d7d8d9]" ><FaArrowRight onClick={prevslide} className='cursor-pointer' /></div>

        </div>
      </div>
      <div className="card-main flex overflow-hidden">
        {/* Start of Card */}
        { restaurantChains.map((restaurant,index)=> 
                   (
                    <div className=" flex flex-col gap-5 px-1" style={{
                      transform: `translatex(-${slide * 100}%)`
                     }} key={index}>
  <div className="Test hover:scale-95 duration-300 transition-all"><div className=''>
            <div className='w-72 h-48 relative   rounded-xl overflow-hidden'>
           
              <img src={`/images/${restaurant.image}`} alt="" class="w-full h-full object-cover " />
              <div className="inset-0 bg-gradient-to-t from-black/60 to-transparent heading absolute ">
                <span className='flex absolute bottom-0 px-2 pb-1 justify-items-end   text-2xl font-extrabold font-[Poppins] text-white'>
                  {restaurant.offer}
                </span>
              </div>

            </div>
          </div>
          <div className="restaurant-text ml-4 ">
            <div className="title flex flex-col">
              <h1 className='font-bold text-xl font-[Poppins] text-[#161A1F]'>{restaurant.title}</h1>
              <div className="flex rating font-[Poppins] font-bold  text-[#161A1F] text-[16px]"><span className='border bg-green-700 rounded-full w-5 justify-center items-center flex h-5 text-white '><MdStarRate className=''/></span> {restaurant.rating} . {restaurant.minTime}-30 {restaurant.maxTime}</div>
              <span className="address flex flex-wrap w-72 text-[#686b78] text-[16px] font-[Poppins] leading-5">{restaurant.name}
                {restaurant.place}</span>

            </div>
          </div></div>

      
        </div>
               
                  ))
                    } 
       
        {/*  End of card  */}

      </div>
      <hr className='mt-4 '></hr>
    </div>
  )
}

export default TopRestaurant
