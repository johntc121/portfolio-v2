import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const handleClickScroll = () => {
    console.log('handleClickScroll');
    const element = document.getElementById('work');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div name='home' className='w-full h-screen bg-primary-color'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#F3EFE0]'>
          John Cripe
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-secondary-color'>
          Software Developer.
        </h2>
        <p className='text-[#F3EFE0] py-4 max-w-[700px]'>
          I’m a software developer specializing in building (and occasionally
          designing) exceptional web pages and web apps. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-[#F3EFE0] group border-2 border-[#F3EFE0] px-6 py-3 my-2 flex items-center hover:bg-secondary-color hover:border-secondary-color' onClick={handleClickScroll}>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
