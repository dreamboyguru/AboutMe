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



  return (
    <section id='home' className='bg-no-repeat border-2 border-blue-800 h-screen text-white' style={{backgroundImage: `url(${home2})`,backgroundSize: 'cover'}}>
      <div className=' mt-72 justify-center items-end'>
        <h1 className='font-medium text-5xl text-yellow-400'>Hey, I am</h1>
        <h1 className='font-medium text-5xl text-yellow-400'>Gurusidda</h1> 
        <span className='font-medium text-4xl text-yellow-400' ref={ele}> Developer</span>
      </div>
    </section>
  )
}

export default Home
