import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' 
      id='About'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        เกี่ยวกับเรา <span className='underline underline-offset-4 decoration-1 font-light'>Goody Seed</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-12'>
        Goody Seed จำหน่ายเมล็ดพันธุ์ข้าวโพดดร.เป๊ก และเมล็ดพันธุ์ถั่วแระญี่ปุ่น
      </p>
      
      <div className='flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 w-full'>
        {/* ฝั่งซ้าย - รูป brand 2 รูป แบบ 2 columns ทุกขนาดหน้าจอ */}
        <div className='grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 w-full lg:w-1/2'>
          <img src={assets.brand_img} alt="Goody Seed Brand" className='w-full h-auto object-cover rounded-lg shadow-md'/>
          <img src={assets.brand_img_2} alt="Goody Seed Products" className='w-full h-auto object-cover rounded-lg shadow-md'/>
        </div>
        
        {/* ฝั่งขวา - รูป Page_fb และข้อมูล */}
        <div className='flex flex-col w-full lg:w-1/2'>
          <img src="/public/Page_fb.jpg" alt="Facebook Page" className='w-full rounded-lg shadow-md mb-6 md:mb-8'/>
          
          <div className='grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-10'>
            <div>
              <p className='text-gray-600 mb-2 text-sm sm:text-base'>เราทำเพจมานานถึง</p>
              <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>6 ปี</p>
            </div>
            <div>
              <p className='text-gray-600 mb-2 text-sm sm:text-base'>มีผู้ติดตามมากถึง</p>
              <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>7,500 คน</p>
            </div>
            <div>
              <p className='text-gray-600 mb-2 text-sm sm:text-base'>มีเมล็ดพันธ์ข้าวโพดจำหน่าย</p>
              <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>11 พันธ์ุ</p>
            </div>
            <div>
              <p className='text-gray-600 mb-2 text-sm sm:text-base'>ถั่วแระญี่ปุ่น</p>
              <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>พันธ์ุ KN-222 จำหน่ายแล้ว</p>
            </div>
          </div>
          
          
          <a className='bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors duration-300 w-fit text-sm sm:text-base' href="#Header">
            กลับไปด้านบน
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default About