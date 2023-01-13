import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Vue from '../assets/vuejs.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Cpp from '../assets/cpp.png';
import Cs from '../assets/cs.png';
import Ssms from '../assets/ssms.png';
import Unity from '../assets/unity.png';
import Unreal from '../assets/unreal.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full pt-64 bg-primary-color text-[#F3EFE0]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-secondary-color '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={Cs} alt="HTML icon" />
                  <p className='my-4'>C#</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto' src={Cpp} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={Vue} alt="HTML icon" />
                  <p className='my-4'>Vue</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={Ssms} alt="HTML icon" />
                  <p className='my-4'>Microsoft SQL Server</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={Unreal} alt="HTML icon" />
                  <p className='my-4'>Unreal Engine</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-secondary-color duration-500'>
                  <img className='w-20 mx-auto pt-2' src={Unity} alt="HTML icon" />
                  <p className='my-4'>Unity</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
