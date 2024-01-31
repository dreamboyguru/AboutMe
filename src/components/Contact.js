import React from 'react'

function Contact() {
  return (
    <section id='contact'>
      <div className='h-auto mb-10'>
        <div className='px-52 max-lg:px-10'>
          <h1 className="text-3xl font-bold bg-white my-10">Contact Me</h1>
          <div className="container flex flex-wrap bg-blue-100 py-16 rounded shadow-lg max-md:p-0">
            <div className="container px-4 py-8 flex flex-wrap justify-center max-md:px-1 max-md:w-full">
              <div className="w-full max-w-xs mx-3 mb-4 sm:w-1/6">
                <a href="mailto:guruhanamannavar676@gmail.com" className="block text-center h-16 pt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md" target="_blank" rel="noopener noreferrer">Email</a>
              </div>
              <div className="w-full max-w-xs mx-3 mb-4 sm:w-1/6">
                <a href="https://github.com/dreamboyguru" className="block text-center h-16 pt-5 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="w-full max-w-xs mx-3 mb-4 sm:w-1/6">
                <a href="https://wa.me/7353249095" className="block text-center h-16 pt-5 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded shadow-md" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
              <div className="w-full max-w-xs mx-3 mb-4 sm:w-1/6">
                <a href="https://www.linkedin.com/in/gurusidda-hanamannavar-67b276170" className="block text-center h-16 pt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
