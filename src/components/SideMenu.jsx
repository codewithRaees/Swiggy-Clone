import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { CiGps } from "react-icons/ci";

const SideMenu = ({ isOpen, setIsOpen }) => {
    const[color,setcolor]=useState('text-black')
    const onMouseEnter= ()=>{
        setcolor('hover:text-[#ff5200]')
    }
    const onMouseLeave=()=>{
        setcolor('text-black')
    }

    const toggleSideMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div onClick={toggleSideMenu}
            className={`fixed  top-0 left-0 h-full w-full bg-black bg-opacity-25 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div onClick={(e) => e.stopPropagation()} className="relative bg-white p-8 h-full w-1/3 shadow-lg">
                <div onClick={toggleSideMenu} className="hover:text-[#ff5200] cursor-pointer close absolute top-4 right-4 text-4xl"><IoMdClose /></div>

                <div className="sidemenuText flex  flex-col items-center justify-start mt-14 h-screen">
                    <input
                        type="text"
                        placeholder="Search for area, street name..."
                        className="p-2 w-full border rounded shadow-lg mb-10 focus:outline-none   focus:shadow-xl transition-shadow duration-300 ease-in-out"
                    />
                    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} 
                    className={` gpsLocation cursor-pointer w-full border border-gray-300 h-1/5 flex  px-5 items-center`}>
                        <div className="gpsIcon px-5 text-2xl mb-5"><CiGps/></div>
                        <div className={`${color} gpsText flex flex-col justify-start font-[Poppins] `}>
                            <span className='text-[14px]'>Get Current Location</span>
                            <span className='text-gray-300 text-[12px]'>Using GPS</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideMenu
