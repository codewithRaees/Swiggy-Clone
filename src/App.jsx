import { useRef, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Categories from './components/Categories'
import TopRestaurant from './components/TopRestaurant '
import CityRestaurants from './components/CityRestaurants'
import States from './components/States'

function App() {
  const [isSticky, setIsSticky] = useState(false); // State to track when to make the div sticky
  const stickyDivRef = useRef(null); // Reference to the div you want to make sticky
  return (
    <>
    {/* <UseRefHookTesting/> */}
      <div className="main-wrapper   ">
        <div className="shadow-lg sticky top-0 z-[999] bg-white header-wrapper"><Header  setIsSticky={setIsSticky} stickyDivRef={stickyDivRef} /></div>
        <Categories/>
        <TopRestaurant/>
        <CityRestaurants isSticky={isSticky} stickyDivRef={stickyDivRef}   />
        <States/>
      </div>

    </>
  )
}

export default App
