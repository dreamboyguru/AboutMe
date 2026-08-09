import React, { useEffect, useRef } from 'react';
import home2 from './images/home2.png';
import Typed from 'typed.js';

const arr = ['Full Stack Developer', 'MERN Stack Specialist', 'JavaScript Developer', 'PHP Engineer'];

function Home() {
  const ele = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(ele.current, {
      strings: arr,
      typeSpeed: 60,
      backSpeed: 45,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id='home' className='relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-4 sm:px-6 lg:px-8 bg-[#0b0f19]'>
      {/* Decorative blurred background blobs */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className='max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10'>
        {/* Left column: Text Content */}
        <div className='md:col-span-7 text-left space-y-6 max-md:text-center max-md:order-2'>
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-400 text-sm font-semibold tracking-wide max-md:mx-auto">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none'>
            Hey, I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Gurusidda</span>
          </h1>

          <div className='h-12 sm:h-16 flex items-center max-md:justify-center'>
            <span className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300'>
              I am a <span className='text-blue-400 font-mono' ref={ele}></span>
            </span>
          </div>

          <p className='text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed max-md:mx-auto'>
            A passionate Full Stack Developer with 4+ years of experience building enterprise web applications. I specialize in scaling MERN stack solutions, designing robust REST APIs, and building multi-module systems for higher-education institutions.
          </p>

          <div className='flex flex-wrap gap-4 pt-4 max-md:justify-center'>
            <a 
              href='#contact' 
              className='px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200'
            >
              Get In Touch
            </a>
            <a 
              href='#project' 
              className='px-8 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-gray-200 hover:text-white font-semibold rounded-lg shadow-md hover:-translate-y-0.5 transition-all duration-200'
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right column: Image/Illustration */}
        <div className='md:col-span-5 flex justify-center items-center max-md:order-1 max-md:mt-6'>
          <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] animate-float'>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl rotate-6 opacity-20 blur-md"></div>
            <div className="absolute inset-0 bg-[#0f172a] rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center">
              <img 
                src={home2} 
                alt='Developer Illustration' 
                className='w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-500'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
