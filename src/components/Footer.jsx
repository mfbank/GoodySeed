import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-[#456b2f] w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img className='w-15 h-10'src={assets.logo} alt="" />
            <p className='text-white mt-4'>Goody Seed จำหน่ายเมล็ดพันธุ์ข้าวโพดดร.เป๊ก และเมล็ดพันธุ์ถั่วแระญี่ปุ่น</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Goody Seed</h3>
            <ul className='flex flex-col gap-2 text-white'>
                <a href="#Header" className='hover:text-white'>หน้าหลัก</a>
                <a href="#About" className='hover:text-white'>เกี่ยวกับเรา</a>
                <a href="#Contact" className='hover:text-white'>ติดต่อ</a>
                <a href="https://www.facebook.com/Goodyseed" className='hover:text-white'>เพจเฟสบุ๊ค</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>ติดต่อ</h3>
            <p className='text-white mb-4 max-w-80'>เบอร์โทร:062 782 6194</p>
            <p className='text-white mb-4 max-w-80'>อีเมล:goodyseed888@gmail.com</p>
            <p className='text-white mb-4 max-w-80'>เฟสบุ๊ค:Goody Seed</p>
        </div>
      </div>
      <div className='border-t border-[#FFF3E3] py-4 mt-10  text-center text-white'>
      Copyright 2025 © GoodySeed. All Right Reserved.
      </div>
    </div>
  )
}

export default Footer
