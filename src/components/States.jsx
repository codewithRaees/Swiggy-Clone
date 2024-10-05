import React, { useState } from 'react'
import StateData from '../assets/Data/StateData'
const States = () => {
  const cards =  StateData.map((state, index) =>
    (<div  key={index} className={` text-black shrink-0 duration-500    w-64 `} >
      <div  className='restautrant-card truncate justify-center border tracking-tight hover:bg-gray-200 transition-all duration-300 ease-in-out px-4 font-semibold text-[#414449] py-4 my-2 mx-2 rounded-lg'>                  
      
       Best restaurants in {state}
      </div>
      
    </div>
    
  ))
 // State to track how many divs to show
 const [showCount, setShowCount] = useState(11);

 // Function to toggle between showing more or fewer divs
 const toggleShowMore = () => {
   setShowCount(showCount === 11 ? cards.length : 11); // Toggle between showing all and showing 3
 };

  return (
    <div className=' max-w-screen-lg mx-auto py-5 flex flex-col  '>
    <div className="sliderTop flex justify-between px-5 items-center  ">
      <h1 className='text-2xl font-extrabold font-[Poppins]'>What's on your mind?</h1>
     
    </div>
    <div className={`categories grid py-3  gap-3  grid-cols-4 `}>
      
         
     { cards.slice(0, showCount)}

      <button
        onClick={toggleShowMore}
        className=" justify-center border tracking-tight hover:bg-gray-200 transition-all duration-300 ease-in-out px-4 font-semibold text-[#414449] py-4 my-2 mx-2 rounded-lg"
      >
        {showCount === 11 ? 'Show More' : 'Show Less'}
      </button>
      
      
       
    </div>
    <hr className='mt-4 '></hr>
  </div>
  )
}

export default States
