import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full pt-32 bg-primary-color text-[#F3EFE0]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

        <div className='py-4'>
          <p className='text-4xl font-bold inline border-b-4 border-secondary-color '>About</p>
        </div>

          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
          <div className='text-4xl font-bold'>
            <p>Hi. I'm John Cripe, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate software developer with multiple years of profressional
              experience. I specialize and excel in creating web based software and applications
              for both large and small clients.
            </p>  
            <p>
              In my free time, I am currently building, writing, and managing HideoutVG, a blog
              and news website about video games and technology. I also try to find time to better
              my skills in game development with Unity and Unreal Engine.
            </p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
