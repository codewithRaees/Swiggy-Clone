import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CityRestaurant from '../assets/Data/CityRestaurant'
import { CgOptions } from "react-icons/cg";
import { RxCaretDown } from "react-icons/rx";
import { MdStarRate } from "react-icons/md";

const CityRestaurants = () => {
    const [slide, setSlide] = useState(0)
    return (
        <div className='city-restaurants max-w-screen-lg  mx-auto'>
            <div className="sliderTop  justify-between px-1 py-2 items-center  ">
                <h1 className='text-2xl font-extrabold font-[Poppins]'>Top restaurant chains in Mumbai</h1>
                <div className="     ">
                    <ul className='flex gap-3  py-2 font-[Poppins]  '>
                        <li className=' border rounded-full flex px-3 tracking-tighter font-medium text-[14px]    py-1 leading-7 items-center justify-center'>Filter   <CgOptions className='mt-1 ml-1'/></li>
                        <li className='border rounded-full flex  px-3 tracking-tighter font-medium text-[14px]    py-1 leading-7 items-center justify-center'>Sort By  <RxCaretDown className='mt-1 text-xl'/></li>
                        <li className='border rounded-full flex  px-3 tracking-tighter font-medium text-[14px]    py-1 leading-7 items-center justify-center'>Fast Delivery</li>
                        <li className='border rounded-full flex  px-3 tracking-tighter font-medium text-[14px]    py-1 leading-7 items-center justify-center'>New on Swiggy</li>
                        <li className='border rounded-full flex  px-3 tracking-tighter font-medium text-[14px]    py-1 leading-7 items-center justify-center'>Rating 4.0+</li>
                        <li className='border rounded-full flex  px-3 tracking-tighter font-medium text-[14px]    py-1 leading-7 items-center justify-center'>Pure Veg</li>
                        <li className='border rounded-full flex  px-3 tracking-tighter font-medium text-[14px]   py-1 leading-7 items-center justify-center'>Offers</li>
                        <li className='border rounded-full flex  px-3 tracking-tighter font-medium text-[14px]    py-1 leading-7 items-center justify-center'>Rs. 300-Rs. 600</li>
                        <li className='border rounded-full flex  px-3 tracking-tighter font-medium text-[14px]    py-1 leading-7 items-center justify-center'>Less than Rs. 300</li>
                    </ul>
                </div>
            </div>
            <div className="card-main gap-5 flex flex-wrap">
        {/* Start of Card */}
        { CityRestaurant.map((restaurant,index)=> 
                   (
                    <div className=" flex flex-col gap-5 px-1" style={{
                      transform: `translatex(-${slide * 100}%)`
                     }} key={index}>
  <div className="Test hover:scale-95 duration-300 transition-all"><div className=''>
            <div className='w-56 h-36 relative   rounded-xl overflow-hidden'>
           
              <img src={`/images/${restaurant.image}`} alt="" class="w-full h-full object-cover " />
              <div className="inset-0 bg-gradient-to-t from-black/60 to-transparent heading absolute ">
                <span className='flex absolute bottom-0 px-2 pb-1 justify-items-end text-xl   font-extrabold font-[Poppins] text-white'>
                  {restaurant.offer}
                </span>
              </div>

            </div>
          </div>
          <div className="restaurant-text ml-1 ">
            <div className="title flex flex-col">
              <h1 className='font-medium  font-[Poppins] text-[#161A1F]'>{restaurant.title}</h1>
              <div className="flex rating font-[Poppins] font-bold  text-[#161A1F] text-[14px]"><span className='border bg-green-700 rounded-full w-5 justify-center items-center flex h-5 text-white '><MdStarRate className=''/></span> {restaurant.rating} . {restaurant.minTime}-30 {restaurant.maxTime}</div>
              <span className="address flex flex-wrap w-48 text-[#686b78] text-[16px] font-[Poppins] leading-5">{restaurant.name}
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

export default CityRestaurants
