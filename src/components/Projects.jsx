import React, { useEffect, useRef, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion';

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector('.project-card')?.offsetWidth || 0;
      const gap = 32; // gap-8 = 32px
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      initial={{opacity: 0, x:-200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='bg-white mx-auto py-8 md:py-12 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-32 my-10 md:my-20 w-full overflow-hidden' 
      id='Projects'
    >
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-center'>
          โพสต์และข่าวสารจากเพจ<span className="underline underline-offset-4 decoration-1 font-light">Goody Seed</span>
        </h1>
        <p className='text-center text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base'>
          โพสต์และข่าวสารจากเพจ ที่เราแนะนำสำหรับคุณในช่วงนี้
        </p>
        <h2 className='text-center'>‼️ผู้ใช้ทุกท่านสามารถคลิ้กที่โพสต์ด้านเพื่อเข้าไปอ่านฉบับเต็มทาง เพจ ได้เลยนะคะ</h2>

        {/* Slider buttons */}
        <div className='flex justify-end items-center mb-8'>
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-3 rounded mr-2 transition-all ${canScrollLeft ? 'bg-gray-200 hover:bg-gray-300 cursor-pointer' : 'bg-gray-100 cursor-not-allowed opacity-50'}`} 
            aria-label='Previous Project'
          >
            <img src={assets.left_arrow} alt="Previous" className='w-5 h-5' />
          </button>
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-3 rounded transition-all ${canScrollRight ? 'bg-gray-200 hover:bg-gray-300 cursor-pointer' : 'bg-gray-100 cursor-not-allowed opacity-50'}`} 
            aria-label='Next Project'
          >
            <img src={assets.right_arrow} alt="Next" className='w-5 h-5' />
          </button>
        </div>

        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className='flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className='project-card flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]'
            >
              <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full'>
                {/* Facebook Post or Image */}
                <div className='w-full'>
                  {project.embed ? (
                    <div 
                      className='w-full h-[500px] md:h-[550px] overflow-hidden' 
                      dangerouslySetInnerHTML={{ __html: project.embed }}
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className='w-full h-[400px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-300' 
                    />
                  )}
                </div>
                
                {/* Info Section Below Post */}
                <div className='px-4 py-4 md:px-6 md:py-5 bg-white border-t border-gray-100'>
                  <h2 className='text-lg md:text-xl font-semibold text-gray-800 mb-2'>
                    {project.title}
                  </h2>
                  <p className='text-gray-600 text-xs md:text-sm flex items-center'>
                    <span className='font-medium'>{project.price}</span> 
                    <span className='mx-2 text-gray-400'>|</span> 
                    <span>{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator (optional) */}
        <div className='flex justify-center items-center gap-2 mt-6'>
          <div className='text-sm text-gray-500'>
            เลื่อนดูโพสต์เพิ่มเติม →
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  )
}

export default Projects