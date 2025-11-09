import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

useEffect(()=>{
    if(showMobileMenu){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
    return ()=>{
        document.body.style.overflow = 'auto'
    };
},[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img className='w-20 h-17' src={assets.logo} alt="logo" />
        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Header" className='cursor-pointer hover:text-yellow-100'>หน้าหลัก</a>
            <a href="#About" className='cursor-pointer hover:text-yellow-100'>เกี่ยวกับเรา</a>
            <a href="#Projects" className='cursor-pointer hover:text-yellow-100'>ติดตามข่าวสารจากเรา</a>
            <a href="https://www.facebook.com/Goodyseed" className='cursor-pointer hover:text-yellow-100'>เพจ</a>
        </ul>
        <a href="#Contact" className='hidden md:block bg-white px-8 py-2 rounded-full hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out'>ติดต่อเรา</a>
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>
      {/* --------- mobile-menu------ */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py2 rounded-full inline-block'>หน้าหลัก</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py2 rounded-full inline-block'>เกี่ยวกับเรา</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py2 rounded-full inline-block'>ติดตามข่าวสารจากเรา</a>
            <a onClick={()=> setShowMobileMenu(false)} href="https://www.facebook.com/Goodyseed" className='px-4 py2 rounded-full inline-block'>Facebook</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
