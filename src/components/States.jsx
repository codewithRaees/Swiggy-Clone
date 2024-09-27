import React, { useState } from 'react'
import StateData from '../assets/Data/StateData'
const States = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle "Show More/Show Less"
  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className=' max-w-screen-lg mx-auto py-5 flex flex-col  '>
    <div className="sliderTop flex justify-between px-5 items-center  ">
      <h1 className='text-2xl font-extrabold font-[Poppins]'>What's on your mind?</h1>
     
    </div>
    <div className="categories grid py-3  gap-3  grid-cols-4">
      {
          StateData.map((state, index) =>
        (<div  key={index} className={`${isExpanded ? '' : 'line-clamp-3'} text-black shrink-0 duration-500     w-64`} >
          <div className='restautrant-card truncate justify-center border tracking-tight hover:bg-gray-200 transition-all duration-300 ease-in-out px-4 font-semibold text-[#414449] py-4 my-2 mx-2 rounded-lg'>                  
          
           Best restaurants in {state}
          </div>
        </div>
        
      ))
      
      }
      
    </div>
    <hr className='mt-4 '></hr>
  </div>
  )
}

export default States
