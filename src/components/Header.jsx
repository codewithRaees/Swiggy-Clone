import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../public/icons/Logo'
import CorporateLink from '../../public/icons/CorporateLink'
import { RxCaretDown } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import SideMenu from './SideMenu';



const Header = ({setIsSticky,stickyDivRef }) => {
    const headerRef = useRef(null); // Reference to the header
    const [addressTitle, setaddressTitle] = useState('text-black'); // Initial Text color
    const [addressText, setaddressText] = useState('text-[#686b78]'); // Initial Text color
    const [addressbgColor, setaddressbgColor] = useState('bg-black'); // Initial background color

    const navlinks = [
        {
            link: 'Swiggy Corporate',
            icon: <CorporateLink className='text-xl' />,
            sup: ''
        },
        {
            link: 'Search',
            icon: <FiSearch className='text-xl' />,
            sup: ''
        },
        {
            link: 'Offers',
            icon: <BiSolidOffer className='text-xl' />,
            sup: 'New'
        },
        {
            link: 'Help',
            icon: <IoHelpBuoyOutline className='text-xl' />,
            sup: ''
        },
        {
            link: 'Sign In',
            icon: <FaRegUser className='text-xl' />,
            sup: ''
        }, {
            link: 'Cart',
            icon: <FiShoppingCart className='text-xl' />,
            sup: '0'
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
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideMenu = () => {
        setIsOpen(!isOpen);
    };


  // Add an event listener for the scroll event
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = stickyDivRef.current.getBoundingClientRect().top; // Get header height
      
      if (window.scrollY > headerHeight ) {
        setIsSticky(true); // Set sticky when scrolled past the header
      } else {
        setIsSticky(false); // Remove sticky when above the header
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener
    };
  }, []);
    return (
        <>
           
            <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} toggleSideMenu={toggleSideMenu}/>
            <header ref={headerRef} className=' py-4 px-2 max-w-[1250px]  mx-auto flex justify-between items-center'>
                <div className="left flex items-center px-2">
                    <Logo />
                    <div onClick={toggleSideMenu}  className="address flex  items-center px-5 font-[Poppins] "
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <div className='flex mt-[6px] flex-col text-[14px] pl-5 '
                        >
                            <span className={`font-bold   ${addressTitle}`} >Mumbai</span>
                            <span className={`w-15 h-1 ${addressbgColor}`}  ></span>
                        </div>
                        &nbsp;&nbsp; <span className={`mt-1 text-[14px] ${addressText} `}> Maharashtra, India</span> <RxCaretDown className='text-3xl mt-1 text-[#ff5200]' /></div>
                </div>
                <nav>
                    <ul className='flex gap-6'>
                        {
                            navlinks.map((link, index) => <li key={index} className='hover:text-[#ff5200] text-[14px] font-semibold'><a className='flex px-1 items-center font-[Poppins]  ' href="#"><span className='px-1'>{link.icon}</span><span className='' >{link.link}<sup className='text-[#ffA700] -top-3 text-xs'>{link.sup}</sup></span></a></li>)
                        }

                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header
