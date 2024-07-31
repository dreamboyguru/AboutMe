import React from 'react'
import aboutme from './images/aboutme.avif'

function About() {
  return (
    <section id='about'>
      <div className="relative">
      <h2 className="text-3xl font-bold bg-white mt-10 max-md:mb-[310px] max-sm:mb-[410px]">About Me </h2>
        <img src={aboutme} alt="img" className="w-full max-h-[600px] h-auto max-md:hidden" />

        {/* Overlay form */}
        <div className="absolute top-20 left-0 w-1/3 h-full flex items-start ml-[65%] max-lg:ml-[55%] max-lg:w-[45%] max-md:mx-[2.5%] max-lg:top-10 max-md:w-[95%] ">
          <div className="bg-gradient-to-br from-white via-gray-100 to-gray-500 p-6 rounded-lg shadow-md">
            {/* Form content */}
            
            <form>
              <div className='text-justify max-sm:text-sm'>
                <li className=''> 
                  "I'm a passionate web developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with expertise in HTML, CSS, Bootstrap, Tailwind CSS, and MariaDB. Currently learning MERN for web applications.</li>

                <li>I'm also a programming coach, helping others on their journey to become professional programmers. Born and raised in India, I love exploring new technologies to build better and scalable products.</li>

              </div>
              <div className="flex flex-wrap justify-center">
                <a href='#contact' className="bg-green-600 hover:bg-green-800 text-white font-bold hover:text-black items-center justify-items-center rounded-md p-3 m-5 ">Let's talk</a>
                <a href='#NA'
                  rel="noreferrer"
                  className="bg-red-600 hover:bg-red-800 text-white font-bold hover:text-black items-center justify-items-center rounded-md p-3 m-5 "
                >My Resume</a>
                <a href='#NA'
                  rel="noreferrer" 
                  className="bg-blue-600 hover:bg-blue-800 text-white font-bold hover:text-black items-center justify-items-center rounded-md p-3 m-5 "
                >GitHub</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
