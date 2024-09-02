import React, { useState } from 'react'
import Logo from '../../public/icons/Logo'
import CorporateLink from '../../public/icons/CorporateLink'
import { RxCaretDown } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

import { IoHelpBuoyOutline } from "react-icons/io5";
import SignIn from '../../public/icons/SignIn';


const Header = () => {
    const [addressTitle, setaddressTitle] = useState('text-black'); // Initial Text color
    const [addressText, setaddressText] = useState('text-[#686b78]'); // Initial Text color
    const [addressbgColor, setaddressbgColor] = useState('bg-black'); // Initial background color
    const navlinks = [
        {
            link: 'Swiggy Corporate',
            icon: <CorporateLink className='text-xl'/>,
            sup:''
        },
        {
            link: 'Search',
            icon: <FiSearch className='text-xl'/>,
            sup:''
        },
        {
            link: 'Offers',
            icon: <BiSolidOffer className='text-xl'/>,
            sup:'New'
        },
        {
            link: 'Help',
            icon: <IoHelpBuoyOutline className='text-xl'/>,
            sup:''
        },
        {
            link: 'Sign In',
            icon: <SignIn className='text-xl'/>,
            sup:''
        }, {
            link: 'Cart',
            icon: <FiShoppingCart className='text-xl'/>,
            sup:'0'
        }
    ]
    const handleMouseEnter = () => {
        setaddressTitle('text-[#ff5200]')
        setaddressText('text-[#c0c0c1]')
        setaddressbgColor('bg-[#ff5200]'); // Background color on hover
    };

    const handleMouseLeave = () => {
        setaddressTitle('text-black')
        setaddressText('text-[#686b78]')
        setaddressbgColor('bg-black'); // Revert to original background color
    };
    return (
        <header className='py-4 px-2 max-w-[1250px]  mx-auto flex justify-between items-center'>
            <div className="left flex items-center px-2">
                <Logo />
                <div className="address flex  items-center px-5 font-[Poppins] "  onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                    <div className='flex mt-[6px] flex-col text-[14px] pl-5 '
                    >
                        <span className={`font-bold   ${addressTitle}`} >Mumbai</span>
                        <span className={`w-15 h-1 ${addressbgColor}`}  ></span>
                    </div>
                    &nbsp;&nbsp; <span className={`mt-1 ${addressText} `}> Maharashtra, India</span> <RxCaretDown className='text-3xl mt-1 text-[#ff5200]' /></div>
            </div>
            <nav>
            <ul className='flex gap-6'>
                {
                    navlinks.map((link, index)=> <li key={index} className=''><a className='flex px-1 items-center font-[Poppins] ' href="#"><span className='px-1'>{link.icon}</span><span className='' >{link.link}<sup className='text-[#ff5200]'>{link.sup}</sup></span></a></li>)
                }
             
            </ul>
            </nav>

        </header>
    )
}

export default Header
