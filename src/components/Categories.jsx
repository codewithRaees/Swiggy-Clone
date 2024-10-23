import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import itemsCategories from '../assets/Data/category';

const Categories = () => {
  const [itemsToShow, setItemsToShow] = useState(8);
  const [stepSize, setStepSize] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);


  // Update the number of items to show and step size based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(8);
        setStepSize(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(6);
        setStepSize(2);
      } else {
        setItemsToShow(3);
        setStepSize(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextslide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + stepSize, itemsCategories.length - itemsToShow)
    );
  };

  const prevslide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - stepSize, 0));
  };

  // Calculate the transform value
  const translateXValue = -(currentIndex * (100 / itemsToShow));
  console.log(translateXValue)

  // Determine when to disable the navigation buttons
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= itemsCategories.length - itemsToShow;

  return (
    <div className='max-w-screen-lg mx-auto py-5 md:flex flex-col'>
      <div className="sliderTop flex justify-between px-5 items-center">
        <h1 className='text-xl md:text-2xl font-extrabold font-[Poppins]'> What's on your mind?</h1>
        <div className="arrows flex gap-3 duration-300">
          <div
            className={`left rounded-full bg-[#e9eaeb] w-[30px] h-[30px] flex items-center justify-center px-1 py-1 hover:bg-[#d7d8d9] ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={!isPrevDisabled ? prevslide : null}
          >
            <FaArrowLeft className='cursor-pointer' />
          </div>
          <div
            className={`right rounded-full bg-[#e9eaeb] w-[30px] h-[30px] flex items-center justify-center px-1 py-1 hover:bg-[#d7d8d9] ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={!isNextDisabled ? nextslide : null}
          >
            <FaArrowRight className='cursor-pointer' />
          </div>
        </div>
      </div>
      <div className="categories-container overflow-hidden relative">
        <div
          className="categories flex py-5 items-center justify-center duration-500 ease-in-out"
          style={{
            transform: `translateX(${translateXValue}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {itemsCategories.map((category, index) => (
            <div key={index} className='text-black shrink-0'>
              <div className='restautrant-card'>
                <img className='duration-500 max-w-[129px] max-h-[170]' src={`/images/${category.image}`} alt={category.name} />
              </div>
              <p className="text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className='mt-4'></hr>
    </div>
  );
};

export default Categories;
