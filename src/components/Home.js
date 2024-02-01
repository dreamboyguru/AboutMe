import React, { useEffect, useRef } from 'react'
import home2 from './images/home2.png'
import typed from 'typed.js'

function Home() {
  const ele = useRef(null)
  const arr = ['Full Stack web Developer', 'MERN Stack Developer', 'JavaScript Developer'];
  useEffect(() => {
    const Type = new typed (ele.current,{
      strings: arr, loop: true, typeSpeed: 100  
    })
    return () => Type.destroy();
  })

  // style={{backgroundImage: `url(${home2})`,backgroundSize: 'cover'}}

  return (
    <section id='home' className='bg-no-repeat border-0 border-blue-800 h-auto text-white'>
      <img src={home2} alt='' className='relative'/>
      <div className='absolute top-20 left-0 mt-48 justify-center items-end w-full max-lg:mt-20 max-md:mt-10 max-sm:mt-0'>
        <h1 className='font-medium text-5xl text-yellow-400 max-md:text-3xl max-sm:text-xl'>Hey, I am</h1>
        <h1 className='font-medium text-5xl text-yellow-400 max-md:text-3xl max-sm:text-xl'>Gurusidda</h1> 
        <span className='font-medium text-4xl text-yellow-400 max-md:text-2xl max-sm:text-lg' ref={ele}> Developer</span>
      </div>
    </section>
  )
}

export default Home
