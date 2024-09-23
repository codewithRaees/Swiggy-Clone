import React from 'react'
import StateData from '../assets/Data/StateData'
const States = () => {
  return (
    <div className=' max-w-screen-lg mx-auto py-5 flex flex-col  '>
    <div className="sliderTop flex justify-between px-5 items-center  ">
      <h1 className='text-2xl font-extrabold font-[Poppins]'>What's on your mind?</h1>
     
    </div>
    <div className="categories flex py-5    flex-wrap ">
      {
          StateData.map((state, index) =>
        (<div  key={index} className='text-black shrink-0 duration-500 gap-5   '>
          <div className='restautrant-card bg-purple-400  px-3 py-3 my-2 mx-2 rounded-md'>                  
            
           Top restaurants in {state}
          </div>
        </div>))
      }
    </div>
    <hr className='mt-4 '></hr>
  </div>
  )
}

export default States
