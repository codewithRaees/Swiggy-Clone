import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import restaurantChains from '../assets/Data/restaurantChains'


const TopRestaurant = () => {
    const[slide , setSlide] = useState(0)

    const nextslide = ()=>{
   
      if(restaurantChains.length - 8 == slide  ) return false
      setSlide(slide + 3 )
    }
    const prevslide = ()=>{
      if(slide == 0  ) return false
      setSlide(slide - 3 )
    }
  return (
    <div className=' max-w-screen-lg mx-auto py-5 flex flex-col  '>
        <div className="sliderTop flex justify-between px-5 items-center  ">
            <h1 className='text-2xl font-extrabold font-[Poppins]'>Top restaurant chains in Mumbai</h1>
            <div className="arrows flex  gap-3 duration-300">
                <div  className="left rounded-full bg-[#e9eaeb] w-[30px] h-[30px] flex items-center justify-center px-1 py-1 hover:bg-[#d7d8d9]" ><FaArrowLeft onClick={nextslide} className='cursor-pointer'/></div>
                <div  className="  rounded-full bg-[#e9eaeb] w-[30px] h-[30px] flex items-center justify-center px-1 py-1 hover:bg-[#d7d8d9]" ><FaArrowRight onClick={prevslide} className='cursor-pointer'/></div>
                
            </div>
        </div>
        <div className=" flex    overflow-hidden gap-5 w-[274px] h-[180px] rounded-xl"> 
          <div className='bg-purple-300 '>
            <img src="/images/uzklu7r1dd7kc1lto5l5.jpeg" alt="" />
          </div>
                    {/* {
                    restaurantChains.map((restaurant,index)=> 
                   (<div style={{
                    transform: `translatex(-${slide * 100}%)`
                   }} key={index} className='text-black    duration-500'>
                        <img className='object-cover  '  src={`/images/${restaurant.image}`} />
                        </div>))
                    } */}
                </div>
                <hr className='mt-4 '></hr>
    </div>
  )
}

export default TopRestaurant
