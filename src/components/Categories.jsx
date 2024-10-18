import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import itemsCategories from '../assets/Data/category'


const Categories = () => {
  
  const [itemsToShow, setItemsToShow] = useState(8);
  const [stepSize, setStepSize] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Update the number of items to show and step size based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg screen
        setItemsToShow(8);
        setStepSize(3);
      } else if (window.innerWidth >= 768) {
        // md screen
        setItemsToShow(6);
        setStepSize(2);
      }
      
        
      else {
        // smaller screens
        setItemsToShow(3); // example for small screens
        setStepSize(1);
      }
    }
     // Initial setup
    handleResize();
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    const nextslide = () => {

      //if (itemsCategories.length - itemsToShow== itemsToShow) return false
      setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + stepSize, itemsCategories.length - itemsToShow)
    );
    }
    const prevslide = () => {
     // if (itemsToShow == 0) return false
      setCurrentIndex((prevIndex) => Math.max(prevIndex - stepSize, 0));
  }
  // Get the items to display
  const visibleItems = itemsCategories.slice(currentIndex, currentIndex + itemsToShow);
 
    return (
      <div className=' max-w-screen-lg mx-auto py-5 md:flex flex-col  '>
        <div className="sliderTop flex justify-between px-5 items-center  ">
          <h1 className='text-2xl font-extrabold font-[Poppins]'>What's on your mind?</h1>
          <div className="arrows flex  gap-3 duration-300">
            <div className="left rounded-full bg-[#e9eaeb] w-[30px] h-[30px] flex items-center justify-center px-1 py-1 hover:bg-[#d7d8d9]" ><FaArrowLeft onClick={nextslide} disabled={currentIndex + itemsToShow >= itemsCategories.length} className='cursor-pointer' /></div>
            <div className="  rounded-full bg-[#e9eaeb] w-[30px] h-[30px] flex items-center justify-center px-1 py-1 hover:bg-[#d7d8d9]" ><FaArrowRight onClick={prevslide} disabled={currentIndex === 0} className='cursor-pointer' /></div>

          </div>
        </div>
        <div className="categories flex py-5 items-center  justify-center   overflow-hidden ">
          {
            visibleItems.map((category, index) =>
            (<div style={{
              transform: `translatex(-${-currentIndex * (100 / itemsToShow)}%)`
              
            }} key={index} className='text-black shrink-0 duration-500  '>
              <div className='restautrant-card  '>
            
                <img className=' duration-500 max-w-[129px] max-h-[170]' src={`/images/${category.image}`} />
              </div>
            </div>))
          }
        </div>
        <hr className='mt-4 '></hr>
      </div>
    )
  }

export default Categories
