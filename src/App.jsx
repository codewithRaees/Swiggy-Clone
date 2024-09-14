import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Categories from './components/Categories'
import TopRestaurant from './components/TopRestaurant '
import CityRestaurants from './components/CityRestaurants'

function App() {


  return (
    <>
      <div className="main-wrapper   ">
        <div className="shadow-lg header-wrapper"><Header /></div>
        <Categories/>
        <TopRestaurant/>
        <CityRestaurants/>
      </div>

    </>
  )
}

export default App
